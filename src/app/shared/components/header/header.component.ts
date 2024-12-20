import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  isMobileNavOpen = false;

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.setupScrollListener();
  }

  setupScrollListener(): void {
    this.renderer.listen('window', 'scroll', () => {
      const nav = this.el.nativeElement.querySelector('nav');
      if (window.scrollY > nav.getBoundingClientRect().bottom) {
        this.renderer.addClass(nav, 'sticky');
      } else {
        this.renderer.removeClass(nav, 'sticky');
      }
    });
  }
}
