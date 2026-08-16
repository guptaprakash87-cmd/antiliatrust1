import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  showBackToTop = false;
  cookieAccepted = false;

  ngOnInit() {
    this.cookieAccepted = localStorage.getItem('cookieAccepted') === 'true';
    // Apply saved dark mode preference
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      document.documentElement.classList.add('dark');
    } else if (saved === 'false') {
      document.documentElement.classList.remove('dark');
    } else {
      // First visit: detect OS preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      }
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showBackToTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  acceptCookie() {
    this.cookieAccepted = true;
    localStorage.setItem('cookieAccepted', 'true');
  }
}
