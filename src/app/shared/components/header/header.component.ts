import {
  Component,
  model, signal
} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgForOf
  ],
  // styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  section = model<string>('summary');

  isMobileMenuOpen = signal<boolean>(false);

  navLinks = [
    { id: 'summary', text: 'Summary' },
    { id: 'skills', text: 'Skills' },
    { id: 'experience', text: 'Journey' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  onNavLinkClick(event: MouseEvent, sectionId: string) {
    event.preventDefault();
    this.section.set(sectionId);
    if (this.isMobileMenuOpen()) {
      this.toggleMobileMenu();
    }
  }
}
