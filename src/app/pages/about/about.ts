import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  values = [
    { icon: '🤲', title: 'Human Dignity', desc: 'Every person, regardless of their condition on the street, deserves to be treated with dignity, respect and compassion.' },
    { icon: '❤️', title: 'Compassion', desc: 'We approach every individual we rescue with empathy — listening to their story before we offer any help.' },
    { icon: '🔑', title: 'Empowerment', desc: 'We do not just provide relief. We equip people with skills and confidence to rebuild their own lives independently.' },
    { icon: '🤝', title: 'Inclusion', desc: 'We work to bring excluded individuals back into the social mainstream — families, communities and the economy.' },
    { icon: '⚖️', title: 'Non-Discrimination', desc: 'We serve all destitute persons — regardless of religion, caste, gender or region — without bias.' },
    { icon: '🔍', title: 'Transparency', desc: 'Every rupee donated is accounted for. We maintain the highest standards of financial accountability and reporting.' },
  ];

  team = [
    {
      name: 'M/S PRATIMA KUMARI',
      role: 'Chief Executive Officer',
      desc: 'Pratima Kumari is the founder and CEO of Antilia Trust. Her unwavering dedication to rescuing and rehabilitating beggars and destitute persons has transformed thousands of lives across Karnataka and beyond.',
      initials: 'PK'
    }
  ];

  milestones = [
    { year: '2002', title: 'Antilia Trust Founded', desc: 'M/S Pratima Kumari established Antilia Trust in Bangalore with a mission to rehabilitate beggars and destitute persons.' },
    { year: '2006', title: 'First Shelter Home Opened', desc: 'Our first shelter home began housing 80 rescued individuals with food, healthcare and skill training.' },
    { year: '2010', title: 'Expanded to 10 Districts', desc: 'Rescue operations expanded across 10 Karnataka districts — reaching 2,000+ rehabilitated persons.' },
    { year: '2015', title: 'Women & Children Wing', desc: 'Dedicated safe homes for destitute women and children launched, providing education and livelihood support.' },
    { year: '2019', title: 'Government MoU Signed', desc: 'Formal partnership with Karnataka State Government for co-funding shelter homes and rehabilitation centers.' },
    { year: '2025', title: '25,000+ Lives Rehabilitated', desc: 'Historic milestone — 25,000+ individuals rescued, rehabilitated and reintegrated across 32 districts.' },
  ];
}
