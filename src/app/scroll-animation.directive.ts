import {
  AfterViewInit,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { animate, AnimationParams } from 'animejs';
import { AnimationStateService } from './shared/services/animation-state.service';

type TAnimationType =
  | 'fade-in-left'
  | 'fade-in-right'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'staggered-fade-in-up';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  animationType = input<TAnimationType>('fade-in-up');
  animationDelay = input<number>(0);
  private animationStateService = inject(AnimationStateService);
  private isVisible = signal(false);

  constructor(private el: ElementRef) {
    // Set initial state to prevent FOUC
    this.el.nativeElement.style.opacity = '0';

    effect(() => {
      if (this.isVisible() && this.animationStateService.preloaderFinished()) {
        this.playAnimation();
        // Disconnect the observer after the first valid animation trigger.
        if (this.observer) {
          this.observer.disconnect();
        }
      }
    });
  }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible.set(true);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  playAnimation() {
    let animationConfig: AnimationParams = {
      opacity: [0, 1],
      ease: 'inOutExpo',
      duration: 1200,
      delay: this.animationDelay(),
    };

    switch (this.animationType()) {
      case 'fade-in-left':
        animationConfig['translateX'] = [-50, 0];
        break;
      case 'fade-in-right':
        animationConfig['translateX'] = [50, 0];
        break;
      case 'fade-in-down':
        animationConfig['translateY'] = [-50, 0];
        break;
      case 'staggered-fade-in-up':
        animationConfig['translateY'] = [100, 0];
        animationConfig['scale'] = [0.7, 1];
        break;
      // case '':
      //   break;
      case 'fade-in-up':
      default:
        animationConfig['translateY'] = [50, 0];
        animationConfig['scale'] = [0.8, 1];
        break;
    }

    animate(this.el.nativeElement as HTMLElement, animationConfig);
  }
}
