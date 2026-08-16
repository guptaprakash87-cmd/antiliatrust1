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

  constructor(private router: Router) {}

  ngOnInit() {
    this.darkMode = document.documentElement.classList.contains('dark');
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }

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