import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  aboutOpen = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = document.documentElement.classList.contains('dark');
    }
    // Close mega menu on route change
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.programsOpen = false;
      this.aboutOpen = false;
      this.menuOpen = false;
    });
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  /** On mobile tap, toggle dropdown; on desktop let routerLink navigate */
  onProgramsClick(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      event.preventDefault();
      this.programsOpen = !this.programsOpen;
    }
  }

  onAboutClick(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      event.preventDefault();
      this.aboutOpen = !this.aboutOpen;
    }
  }

  /** Close mega menu when clicking anywhere outside */
  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.has-mega')) {
      this.programsOpen = false;
      this.aboutOpen = false;
    }
  }

  toggleDark() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(this.darkMode));
  }
}