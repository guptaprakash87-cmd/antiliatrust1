import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './our-work.html',
  styleUrl: './our-work.css',
})
export class OurWork {

  programs = [
    {
      icon: '🏘️',
      category: 'Rescue & Shelter',
      title: 'Safe Haven Shelters',
      desc: 'We operate 48 fully equipped shelter homes across Karnataka, providing a safe, clean, and dignified living environment for rescued individuals.',
      beneficiaries: '15,000+',
      tag: 'Ongoing'
    },
    {
      icon: '🚑',
      category: 'Rescue & Shelter',
      title: 'Active Rescue Operations',
      desc: 'Our mobile response teams patrol streets and respond to helpline calls to rescue destitute persons living in unsafe conditions.',
      beneficiaries: '3,200+ yearly',
      tag: 'Ongoing'
    },
    {
      icon: '🏥',
      category: 'Healthcare',
      title: 'Mobile Medical Units',
      desc: 'Fully equipped medical vans that bring doctors, diagnostic services and medicines directly to individuals on the streets and in shelters.',
      beneficiaries: '8,000+',
      tag: 'Ongoing'
    },
    {
      icon: '🧠',
      category: 'Healthcare',
      title: 'Mental Wellness & Counseling',
      desc: 'Professional psychiatric care and trauma counseling to help rescued individuals heal from the mental toll of street living.',
      beneficiaries: '5,000+',
      tag: 'Ongoing'
    },
    {
      icon: '🍛',
      category: 'Nutrition',
      title: 'Daily Nutrition Drives',
      desc: 'Providing three hot, nutritious meals daily across all our shelters, alongside street-level food distribution for the most vulnerable.',
      beneficiaries: '12,000+',
      tag: 'Ongoing'
    },
    {
      icon: '🧵',
      category: 'Skill Training',
      title: 'Vocational Training Centers',
      desc: 'Equipping individuals with marketable skills such as tailoring, carpentry, and mobile repair to help them achieve financial independence.',
      beneficiaries: '20,000+',
      tag: 'Ongoing'
    },
    {
      icon: '👩‍💼',
      category: 'Skill Training',
      title: 'Women Livelihood Program',
      desc: 'Specialized training, micro-finance and mentorship for rescued women to launch and grow their own small businesses.',
      beneficiaries: '2,500+',
      tag: 'Ongoing'
    },
    {
      icon: '🤝',
      category: 'Social Reintegration',
      title: 'Family Reunification',
      desc: 'Dedicated teams working to trace families and safely reunite lost or abandoned individuals with their loved ones whenever possible.',
      beneficiaries: '4,500+',
      tag: 'Ongoing'
    },
  ];

  categories = ['All', 'Rescue & Shelter', 'Healthcare', 'Nutrition', 'Skill Training', 'Social Reintegration'];
  activeCategory = 'All';

  get filteredPrograms() {
    if (this.activeCategory === 'All') return this.programs;
    return this.programs.filter(p => p.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
