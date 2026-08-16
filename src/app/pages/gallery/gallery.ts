import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  categories = ['All', 'Rescue & Shelter', 'Healthcare', 'Skill Training', 'Nutrition', 'Social Reintegration', 'Events'];
  activeFilter = 'All';

  items = [
    { category: 'Rescue & Shelter', emoji: '🏠', title: 'Shanti Bhavan Shelter — Dharwad', desc: 'A safe, clean living space newly constructed for rescued destitute women.' },
    { category: 'Rescue & Shelter', emoji: '🌟', title: 'Night Rescue Operations — Bangalore', desc: 'Our mobile team providing emergency blankets and shelter transport on a winter night.' },
    { category: 'Healthcare', emoji: '🏥', title: 'Mobile Medical Camp — Mysore', desc: 'Free psychiatric evaluations and general health check-ups at a street camp.' },
    { category: 'Healthcare', emoji: '💊', title: 'Mental Wellness Ward — Hubli', desc: 'Patients recovering in our specialized ward for severe trauma and mental illness.' },
    { category: 'Skill Training', emoji: '🧵', title: 'Tailoring Center — Belgaum', desc: 'Rehabilitated women learning garment stitching to start their own micro-businesses.' },
    { category: 'Skill Training', emoji: '🪚', title: 'Carpentry Workshop — Tumkur', desc: 'Hands-on woodworking training for rescued youth to ensure future livelihood.' },
    { category: 'Nutrition', emoji: '🍛', title: 'Daily Meals — Statewide', desc: 'Nutritious, hot meals being served at our 48 shelter homes across Karnataka.' },
    { category: 'Nutrition', emoji: '🍲', title: 'Street Food Drive — Patna', desc: 'Distributing high-protein food packets to vulnerable street communities.' },
    { category: 'Social Reintegration', emoji: '🤝', title: 'Family Reunification — Bihar', desc: 'A mother reunited with her lost son after 4 years, facilitated by our tracing team.' },
    { category: 'Social Reintegration', emoji: '💳', title: 'Identity Camp — Rural Karnataka', desc: 'Assisting rehabilitated persons in securing Aadhaar cards and bank accounts.' },
    { category: 'Events', emoji: '🎉', title: 'Independence Day — Main Shelter', desc: 'Shelter residents celebrating Independence Day with cultural performances.' },
    { category: 'Events', emoji: '🏆', title: 'NGO Excellence Award', desc: 'Our CEO receiving the State Award for outstanding work in beggar rehabilitation.' },
  ];

  get filteredItems() {
    if (this.activeFilter === 'All') return this.items;
    return this.items.filter(i => i.category === this.activeFilter);
  }
}
