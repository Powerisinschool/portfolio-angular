import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Project } from '../../../../shared/models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  template: '',
  // templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  isWebLandscape = false;
  // Initialize with a placeholder project in the array
  projects$ = new Observable<Project[]>((observer) => {
    observer.next([
      {
        id: 0,
        title: 'Portfolio Website',
        description: `A modern, responsive, and interactive portfolio website showcasing my skills as a web developer.`,
        imageUrl: 'assets/images/project-portfolio-website.webp',
        projectUrl: 'https://github.com/Powerisinschool/portfolio-angular',
        tags: ['Angular', 'TypeScript', 'CSS'],
      },
      {
        id: 1,
        title: 'ImageX',
        description: `A comprehensive API for image processing, providing a wide range of features.`,
        imageUrl: 'assets/images/project-imagex.webp',
        projectUrl: 'https://github.com/Powerisinschool/image-x',
        tags: ['Gin', 'Golang', 'Docker'],
      },
    ]);
  });

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
