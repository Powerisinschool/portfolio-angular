import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  Renderer2,
  Signal,
  signal,
  viewChild,
  ViewChild
} from '@angular/core';
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [HeaderComponent]
})
export class AppComponent implements AfterViewInit {
  title = signal('portfolio');
  private summarySection: Signal<ElementRef<HTMLElement> | undefined> = viewChild('summary');
  protected readonly skillsSection: Signal<ElementRef<HTMLElement> | undefined> = viewChild('skills');
  protected readonly sections: Record<string, Signal<ElementRef<HTMLElement> | undefined>> = {
    'summary': this.summarySection,
    'skills': this.skillsSection,
  }
  activeSection = signal<string>('summary');
  // @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // @ViewChild('main', { static: true }) mainElement!: ElementRef;
  preloaderFinished = signal(false);

  constructor(private renderer: Renderer2, private el: ElementRef) {
    effect(() => {
      if (!this.preloaderFinished()) return;

      console.log('activeSection', this.activeSection());
      const sectionElement = this.sections[this.activeSection()]?.()?.nativeElement;
      if (sectionElement) {
        sectionElement.scrollIntoView({behavior: 'smooth'});
      }
      console.log(sectionElement);
    });
    this.removePreloader().then(() => {
      this.preloaderFinished.set(true);
    });
  }

  ngAfterViewInit(): void {
    // this.setupPreloader();
    // window.addEventListener('resize', this.adjustMainPadding.bind(this));
  }
  removePreloader(): Promise<void> {
    return new Promise((resolve) => {
      const preloader = document.getElementById('preloader');
      if (!preloader) {
        resolve();
        return;
      };

      setTimeout(() => {
        this.renderer.addClass(preloader, 'fade-out');
        setTimeout(() => {
          this.renderer.setStyle(preloader, 'display', 'none');

          // Optional: Call another method after hiding the preloader.
          // this.adjustMainPadding();

          // Resolve the promise now that all actions are complete.
          resolve();
        }, 500);
      }, 2000);
    });
  }
  //
  // adjustMainPadding() {
  //   console.log("I'm called here");
  //   const navHeight = this.headerComponent.getHeight();
  //   this.mainElement.nativeElement.style.paddingTop = `${navHeight}px`;
  // }
}
