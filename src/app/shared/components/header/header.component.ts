import {
  AfterViewInit,
  Component,
  input,
  model,
  Renderer2,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [],
  styleUrl: './header.component.css',
  // styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  isScrolled = input<boolean>(false);

  navLinks = [
    { id: 'summary', text: 'Summary' },
    { id: 'skills', text: 'Skills' },
    { id: 'experience', text: 'Journey' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];
  section = model<any>();

  isMobileMenuOpen = signal<boolean>(false);

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen('window', 'scroll', () => {});
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  onNavLinkClick(event: MouseEvent, sectionId: string) {
    event.preventDefault();
    this.section.set(sectionId);
    if (this.isMobileMenuOpen()) {
      this.toggleMobileMenu();
    }
  }
}
