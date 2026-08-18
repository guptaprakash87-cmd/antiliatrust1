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
    { category: 'Rescue & Shelter', emoji: '🏠', img: '/images/gallery/shelter_home.jpg',    title: 'Shanti Bhavan Shelter — Dharwad',        desc: 'A safe, clean living space newly constructed for rescued destitute women.' },
    { category: 'Rescue & Shelter', emoji: '🌟', img: '/images/gallery/night_rescue.jpg',    title: 'Night Rescue Operations — Bangalore',    desc: 'Our mobile team providing emergency blankets and shelter transport on a winter night.' },
    { category: 'Healthcare',       emoji: '🏥', img: '/images/gallery/medical_camp.jpg',    title: 'Mobile Medical Camp — Mysore',           desc: 'Free psychiatric evaluations and general health check-ups at a street camp.' },
    { category: 'Healthcare',       emoji: '💊', img: '/images/gallery/mental_wellness.jpg', title: 'Mental Wellness Ward — Hubli',           desc: 'Patients recovering in our specialized ward for severe trauma and mental illness.' },
    { category: 'Skill Training',   emoji: '🧵', img: '/images/gallery/tailoring.jpg',      title: 'Tailoring Center — Belgaum',             desc: 'Rehabilitated women learning garment stitching to start their own micro-businesses.' },
    { category: 'Skill Training',   emoji: '🪚', img: '/images/gallery/carpentry.jpg',      title: 'Carpentry Workshop — Tumkur',            desc: 'Hands-on woodworking training for rescued youth to ensure future livelihood.' },
    { category: 'Nutrition',        emoji: '🍛', img: '/images/gallery/daily_meals.jpg',    title: 'Daily Meals — Statewide',               desc: 'Nutritious, hot meals being served at our 48 shelter homes across Karnataka.' },
    { category: 'Nutrition',        emoji: '🍲', img: '/images/gallery/food_drive.jpg',     title: 'Street Food Drive — Patna',             desc: 'Distributing high-protein food packets to vulnerable street communities.' },
    { category: 'Social Reintegration', emoji: '🤝', img: '/images/gallery/family_reunion.jpg', title: 'Family Reunification — Bihar',     desc: 'A mother reunited with her lost son after 4 years, facilitated by our tracing team.' },
    { category: 'Social Reintegration', emoji: '💳', img: '/images/gallery/identity_camp.jpg', title: 'Identity Camp — Rural Karnataka',   desc: 'Assisting rehabilitated persons in securing Aadhaar cards and bank accounts.' },
    { category: 'Events',           emoji: '🎉', img: '/images/gallery/independence_day.jpg', title: 'Independence Day — Main Shelter',     desc: 'Shelter residents celebrating Independence Day with cultural performances.' },
    { category: 'Events',           emoji: '🏆', img: '/images/gallery/ngo_award.jpg',      title: 'NGO Excellence Award',                  desc: 'Our CEO receiving the State Award for outstanding work in beggar rehabilitation.' },
  ];

  get filteredItems() {
    if (this.activeFilter === 'All') return this.items;
    return this.items.filter(i => i.category === this.activeFilter);
  }
}
