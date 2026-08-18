import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm: FormGroup;
  submitted = false;
  success = false;

  contactInfo: { icon: string; title: string; lines: string[]; image?: string }[] = [
    { icon: '📍', title: 'Registered Office', lines: ['Antilia Trust', 'Shanti Enclave Apartment, Road No 16A', 'Aparna Bank Colony, Ramjaipal Nagar', 'Patna – 801503, Bihar, India'] },
    { icon: '🏢', title: 'Corporate Address', lines: ['ANTILIA TRUST', '#30, 13th Main, 10th Cross', 'ITI Layout, Bangalore – 560068', 'Karnataka, India'] },
    { icon: '📧', title: 'Email Us', lines: ['antiliatrust@gmail.com', 'Mon – Sat: 9:00 AM – 6:00 PM'] },
    { icon: '📞', title: 'Call Us', lines: ['+91 78924 55405', 'Mon – Sat: 9:00 AM – 6:00 PM IST'] },
    { icon: '👤', title: 'CEO', lines: ['M/S PRATIMA KUMARI', 'Chief Executive Officer'], image: '/images/ceo_pratima_kumari.jpg' },
  ];

  subjects = [
    'General Inquiry',
    'Rescue / Report a Destitute Person',
    'Donate / Fund a Program',
    'Volunteer with Us',
    'Partnership / Collaboration',
    'Shelter Admission',
    'Skill Training Enrollment',
    'Media / Press',
    'Other'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]{10}$')]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  get f() { return this.contactForm.controls; }

  async submitForm() {
    this.submitted = true;
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: '58c86661-05ba-495b-abeb-596f253009f9',
            name: formValue.name,
            email: formValue.email,
            phone: formValue.phone || 'Not Provided',
            subject: formValue.subject,
            message: formValue.message,
            from_name: 'Antilia Trust Website Contact'
          })
        });

        const result = await response.json();
        
        if (response.status === 200) {
          this.success = true;
          this.contactForm.reset();
          this.submitted = false;
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.success = false;
          }, 5000);
        } else {
          console.error('Error submitting form:', result);
          alert('Something went wrong. Please try again later.');
        }
      } catch (error) {
        console.error('Network error:', error);
        alert('A network error occurred. Please try again later.');
      }
    }
  }
}
