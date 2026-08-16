import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-impact-stories',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './impact-stories.html',
  styleUrl: './impact-stories.css',
})
export class ImpactStories {

  categories = ['All', 'Rescue & Shelter', 'Healthcare', 'Skill Training', 'Social Reintegration'];
  activeCategory = 'All';

  stories = [
    {
      category: 'Rescue & Shelter',
      emoji: '🌟',
      title: 'From Footpath to Workshop Owner',
      name: 'Ramu Verma',
      location: 'Bangalore',
      year: '2023',
      desc: 'Ramu spent 12 years begging near Majestic Bus Stand. After being rescued by Antilia Trust, he underwent 3 months of carpentry training. Today, he runs his own small workshop and earns ₹18,000 a month.',
      quote: '"I never thought I would own anything in my life. Antilia Trust gave me hands that can build, not just beg."',
      featured: true
    },
    {
      category: 'Skill Training',
      emoji: '🧵',
      title: 'A Mother\'s New Beginning',
      name: 'Rekha Kumari',
      location: 'Mysore',
      year: '2023',
      desc: 'Rescued with her two children from a railway station, Rekha completed tailoring training at our shelter. She now stitches school uniforms and earns enough to send both her children to school.',
      quote: '"I used to depend on others\' pity. Now others depend on my stitching."',
      featured: false
    },
    {
      category: 'Social Reintegration',
      emoji: '🤝',
      title: 'Reunited After 4 Years',
      name: 'Suresh Munda',
      location: 'Hubli',
      year: '2022',
      desc: 'Suresh lost his mind and his family for 4 years, wandering the streets. Our rescue team found him, gave him medicine and counselling, and traced his family in Bihar.',
      quote: '"The Trust found me on the road, treated me, and brought me home."',
      featured: false
    },
    {
      category: 'Healthcare',
      emoji: '💊',
      title: 'Healing the Hidden Crisis',
      name: 'Anjali',
      location: 'Bengaluru Urban',
      year: '2022',
      desc: 'Found living under a flyover with severe infections and untreated mental illness, Anjali received 6 months of intensive psychiatric care at our specialized medical ward.',
      quote: '"I didn\'t know where I was or who I was. Now I am myself again."',
      featured: false
    },
    {
      category: 'Rescue & Shelter',
      emoji: '🏠',
      title: 'A Safe Haven for 80 Women',
      name: 'Shanti Bhavan Shelter',
      location: 'Dharwad',
      year: '2023',
      desc: 'We opened a dedicated safe home for destitute women rescued from begging. They now receive daily meals, clean clothes, and dignity they had long forgotten.',
      quote: '"For the first time in years, I can sleep without fear."',
      featured: false
    },
    {
      category: 'Skill Training',
      emoji: '📱',
      title: 'Tech Skills for a New Life',
      name: 'Vikram',
      location: 'Tumkur',
      year: '2021',
      desc: 'Rescued at age 19 from a life of begging, Vikram showed an interest in electronics. He completed our mobile repair course and now works at a local service center.',
      quote: '"They didn\'t just give me food, they gave me a career."',
      featured: false
    },
  ];

  get filteredStories() {
    if (this.activeCategory === 'All') return this.stories;
    return this.stories.filter(s => s.category === this.activeCategory || s.category.toLowerCase().includes(this.activeCategory.toLowerCase()));
  }

  get featuredStory() {
    return this.stories.find(s => s.featured);
  }

  get gridStories() {
    return this.filteredStories.filter(s => !s.featured || this.activeCategory !== 'All');
  }
}
