import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  output,
  Renderer2,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css'],
})
export class PreloaderComponent implements OnInit, OnDestroy {
  animationFinished = output<void>();
  private preloaderElement = viewChild<ElementRef<HTMLDivElement>>('preloader');

  private timeoutId: any;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => {
      this.hidePreloader();
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private hidePreloader(): void {
    const preloaderElement = this.preloaderElement()?.nativeElement;
    if (preloaderElement) {
      this.renderer.addClass(preloaderElement, 'fade-out');
      setTimeout(() => {
        this.renderer.setStyle(preloaderElement, 'display', 'none');
        this.animationFinished.emit();
      }, 500);
    }
  }
}
