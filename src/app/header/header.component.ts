import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpen = false;
  constructor(private scrollService: ScrollService) {}

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    if (this.isOpen) this.toggleMenu();
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    const html = document.querySelector('html');
    if (html) {
      if (this.isOpen) {
        html.style.overflowY = 'hidden';
      } else {
        html.style.overflowY = 'auto';
      }
    }
  }

  scrollToName(offset: number): void {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }

  toggleScroll(): void {
    this.toggleMenu();
    this.scrollToName(150);
  }
}
