import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setupPreloader();
  }
  setupPreloader(): void {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    setTimeout(() => {
      this.renderer.addClass(preloader, 'fade-out');
      setTimeout(() => {
        this.renderer.setStyle(preloader, 'display', 'none');
      }, 500);
    }, 4000);
  }
}
