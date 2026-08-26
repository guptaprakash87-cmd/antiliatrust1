import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  currentSlide = 0;
  livesImpacted = 0;
  shelters = 0;
  vocationalTrainees = 0;
  districtsReached = 0;
  activeVoiceTab = 'leadership';
  currentVoice = 0;
  countersStarted = false;

  slides = [
    {
      src: '/images/hero_antilia_collage.jpg',
      overlay: 'rgba(5,20,12,0.42)',
      title: '',
      description: 'Antilia Trust rehabilitates beggars and non-livelihood communities — providing shelter, food, healthcare, skill training and a path back to dignified life.'
    },
    {
      src: '/images/sampleabout.png',
      overlay: 'rgba(7,29,20,0.62)',
      title: 'Restoring Dignity,\nTransforming Lives',
      description: 'Antilia Trust rehabilitates beggars and non-livelihood communities — providing shelter, food, healthcare, skill training and a path back to dignified life.'
    },
    {
      src: '/images/hero.png',
      overlay: 'rgba(15,81,50,0.68)',
      title: 'From the Streets\nTo a Brighter Future',
      description: 'Through our rescue, shelter and skill programs, we give every individual a real chance to rebuild their life and re-enter society with confidence.'
    },
    {
      src: '/images/hero_skill_training.jpg',
      overlay: 'rgba(0,60,20,0.70)',
      title: 'Skill Training\nFor Livelihood',
      description: 'We equip rescued individuals with vocational skills — tailoring, carpentry, food processing, mobile repair and more — creating sustainable livelihoods.'
    },
    {
      src: '/images/hero_shelter_home.jpg',
      overlay: 'rgba(5,45,28,0.66)',
      title: 'Shelter, Food\n& Care for All',
      description: 'Every destitute person deserves a roof, nutritious meals and compassionate care. Our shelter homes across Karnataka provide safety and dignity to thousands.'
    },
    {
      src: '/images/activity_balloon.jpg',
      overlay: 'rgba(10,35,20,0.65)',
      title: 'Engaging Activities\nFor Healing Minds',
      description: 'Beyond food and shelter, we nurture mental well-being through group activities, workshops and creative sessions at our Antilia Trust centres.'
    },
    {
      src: '/images/children_classroom.jpg',
      overlay: 'rgba(0,50,25,0.68)',
      title: 'Education\nFor Every Child',
      description: 'Children rescued from streets deserve a future. Our bridge education programs ensure every child gets to learn, grow and dream in a safe environment.'
    }
  ];

  latestUpdates = [
    { tag: 'Rehabilitation', emoji: '🏠', date: 'Aug 2, 2025', title: '500 Individuals Rehabilitated in Bangalore Drive', excerpt: 'Our rescue team rehabilitated 500 individuals from streets, provided shelter, food and began skill training within 30 days.' },
    { tag: 'Skill Training', emoji: '🔧', date: 'Jul 20, 2025', title: 'Vocational Training Centre Inaugurated in Mysore', excerpt: 'New centre offers tailoring, carpentry and computer skills to 200 rescued individuals, helping them earn a steady income.' },
    { tag: 'Healthcare', emoji: '🏥', date: 'Jul 5, 2025', title: 'Free Medical Camp Serves 1,200 Destitute Persons', excerpt: 'Our mobile medical unit conducted a 3-day camp providing free checkups, medicines and mental health support.' },
    { tag: 'Women', emoji: '👩', date: 'Jun 18, 2025', title: 'Safe Shelter for 300 Destitute Women Opened', excerpt: 'A dedicated safe home for destitute women and children opened in collaboration with the Karnataka State Government.' },
    { tag: 'Award', emoji: '🏆', date: 'Jun 1, 2025', title: 'Antilia Trust Wins State NGO Excellence Award', excerpt: 'Honoured by the Karnataka State Government for outstanding contribution to beggar rehabilitation and livelihood generation.' },
  ];

  editorialStories = [
    {
      category: 'Rehabilitation', emoji: '🌟', size: 'big',
      title: 'From Footpath to Workshop Owner',
      location: 'Bangalore, Karnataka',
      desc: 'Ramu spent 12 years begging near Majestic Bus Stand. After being rescued by Antilia Trust, he underwent 3 months of carpentry training. Today, he runs his own small workshop and earns ₹18,000 a month.',
      quote: '"I never thought I would own anything in my life. Antilia Trust gave me hands that can build, not just beg."'
    },
    {
      category: 'Women', emoji: '🧵', size: 'half',
      title: 'Rekha\'s New Beginning',
      location: 'Mysore, Karnataka',
      desc: 'Rescued with her two children from a railway station, Rekha completed tailoring training and now stitches uniforms for local schools.',
      quote: ''
    },
    {
      category: 'Children', emoji: '📚', size: 'half',
      title: 'Children Back in School',
      location: 'Hubli, Karnataka',
      desc: '180 children rescued from begging have been enrolled in government schools under our bridge education program.',
      quote: ''
    },
    {
      category: 'Healthcare', emoji: '💊', size: 'tall',
      title: 'Mental Health: The Hidden Crisis',
      location: 'Bengaluru Urban, Karnataka',
      desc: 'Over 40% of individuals on the streets suffer from mental illness. Our counselling team has provided therapy and medication support to 800+ individuals, many of whom have been reunited with their families.',
      quote: '"I didn\'t know where I was or who I was. The Trust found me, treated me and brought me home."'
    }
  ];

  focusAreas = [
    { emoji: '🏠', label: 'Shelter & Housing', color: '#e8f5e9', accent: '#2e7d32', desc: 'Safe shelter homes for rescued beggars & destitute', link: '/our-work' },
    { emoji: '🍱', label: 'Food & Nutrition', color: '#fff8e1', accent: '#e65100', desc: 'Daily nutritious meals for individuals in shelters', link: '/our-work' },
    { emoji: '🔧', label: 'Skill Development', color: '#e3f2fd', accent: '#1565c0', desc: 'Vocational training for sustainable livelihoods', link: '/our-work' },
    { emoji: '🏥', label: 'Healthcare', color: '#fce4ec', accent: '#c62828', desc: 'Mobile clinics & mental health support', link: '/our-work' },
    { emoji: '👩', label: 'Women & Children', color: '#f3e5f5', accent: '#6a1b9a', desc: 'Safe homes & education for women & rescued children', link: '/our-work' },
    { emoji: '📚', label: 'Education', color: '#e0f2f1', accent: '#00695c', desc: 'Bridge schooling & literacy for rescued individuals', link: '/our-work' },
    { emoji: '👔', label: 'Social Reintegration', color: '#fff3e0', accent: '#ef6c00', desc: 'Reuniting rehabilitated persons with their families', link: '/our-work' },
    { emoji: '🤝', label: 'Government Linkages', color: '#e8eaf6', accent: '#283593', desc: 'Helping access Aadhaar, ration cards & welfare schemes', link: '/our-work' },
  ];

  voices = {
    leadership: [
      {
        initials: 'OG',
        photo: '/images/founder_om_prakash_gupta.jpg',
        name: 'MR. OM PRAKASH GUPTA',
        role: 'Founder & Chief Executive Officer, Antilia Trust',
        quote: '"Every person on the street is a human being with a story, a past and potential. Our work is not charity — it is about restoring what society took away: dignity, belonging and a future."'
      },
      {
        initials: 'RS',
        photo: '',
        name: 'Ramesh Sharma',
        role: 'Director – Shelter & Rehabilitation',
        quote: '"Rehabilitation is not just giving a roof. It is rebuilding the person inside — their confidence, their skills and their identity. We do not give up on anyone."'
      },
      {
        initials: 'AN',
        photo: '',
        name: 'Anitha Nair',
        role: 'Head – Skills & Livelihood Program',
        quote: '"A skill is the most powerful thing you can give a person. Once they can earn, they can stand on their own. That is where real change begins."'
      },
    ],
    field: [
      {
        initials: 'RV',
        photo: '',
        name: 'Ramu Verma',
        role: 'Rescued from Bangalore Majestic, 2022',
        quote: '"I begged for 12 years. I thought that was my destiny. Today I run my own carpentry workshop. I never imagined this was possible. Antilia Trust changed everything."'
      },
      {
        initials: 'RK',
        photo: '',
        name: 'Rekha Kumari',
        role: 'Shelter Resident & Tailoring Trainee',
        quote: '"They gave us food and a room. But more than that, they made us feel like we belong. Now I stitch school uniforms and can send my children to school."'
      },
      {
        initials: 'SM',
        photo: '',
        name: 'Suresh Munda',
        role: 'Reunited with Family, Mysore',
        quote: '"I lost my mind and my family for 4 years. The Trust found me on the road, gave me medicine and counselling, and found my family. I am home now."'
      },
    ]
  };

  get currentVoices() {
    return this.activeVoiceTab === 'leadership' ? this.voices.leadership : this.voices.field;
  }

  ngOnInit() {
    // Slider auto-play has been removed as per user request.
    // It now only changes on explicit arrow clicks.
  }

  ngAfterViewInit() {
    this.setupScrollReveal();
    this.setupCounterObserver();
  }

  setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  setupCounterObserver() {
    const statsEl = document.querySelector('.stats-section');
    if (!statsEl) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.countersStarted) {
        this.countersStarted = true;
        this.animateCounter('livesImpacted', 25000);
        this.animateCounter('shelters', 48);
        this.animateCounter('vocationalTrainees', 8500);
        this.animateCounter('districtsReached', 32);
      }
    }, { threshold: 0.3 });
    obs.observe(statsEl);
  }

  animateCounter(field: keyof HomeComponent, target: number) {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.ceil(target / 80);
      if (current >= target) { current = target; clearInterval(interval); }
      (this[field] as number) = current;
    }, 20);
  }

  nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  previousSlide() { this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; }
  goToSlide(i: number) { this.currentSlide = i; }
  nextVoice() { this.currentVoice = (this.currentVoice + 1) % this.currentVoices.length; }
  prevVoice() { this.currentVoice = (this.currentVoice - 1 + this.currentVoices.length) % this.currentVoices.length; }
  setVoiceTab(tab: string) { this.activeVoiceTab = tab; this.currentVoice = 0; }
}