import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  isWebLandscape = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    document.body.classList.remove('stopped');
    this.breakpointObserver
      .observe([Breakpoints.TabletLandscape, Breakpoints.WebLandscape])
      .subscribe((result) => {
        if (
          result.matches &&
          (result.breakpoints[Breakpoints.TabletLandscape] ||
            result.breakpoints[Breakpoints.WebLandscape])
        ) {
          console.log('Web layout');
          this.isWebLandscape = true;
        } else {
          this.isWebLandscape = false;
        }
      });
  }

  ngOnDestroy(): void {
    document.body.classList.add('stopped');
    this.breakpointObserver.ngOnDestroy();
  }
}
