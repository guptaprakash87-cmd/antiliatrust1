import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  darkMode = false;
  programsOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.darkMode = document.documentElement.classList.contains('dark');
    // Close mega menu on route change
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.programsOpen = false;
      this.menuOpen = false;
    });
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  /** On mobile tap, toggle dropdown; on desktop let routerLink navigate */
  onProgramsClick(event: MouseEvent) {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      event.preventDefault();
      this.programsOpen = !this.programsOpen;
    }
  }

  /** Close mega menu when clicking anywhere outside */
  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.has-mega')) {
      this.programsOpen = false;
    }
  }

  toggleDark() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(this.darkMode));
  }
}