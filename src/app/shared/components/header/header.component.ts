import {
  Component,
  model, signal
} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [],
  // styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navLinks = [
    { id: 'summary', text: 'Summary' },
    { id: 'skills', text: 'Skills' },
    { id: 'experience', text: 'Journey' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];
  section = model<string>(this.navLinks[0].id);

  isMobileMenuOpen = signal<boolean>(false);

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
