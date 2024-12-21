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

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  isWebLandscape = false;
  // Initialize with a placeholder project in the array
  projects$ = new Observable<Project[]>((observer) => {
    observer.next([
      {
        id: 0,
        title: 'Project One',
        description: `A dynamic and interactive web application showcasing the ability to manage user profiles.`,
        imageUrl:
          'https://images.unsplash.com/photo-1722704264670-609ad35aaa53?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        projectUrl: '#',
        tags: ['React', 'TypeScript', 'Firebase'],
      },
      {
        id: 1,
        title: 'Project Two',
        description: `A comprehensive web application, showcasing a user-friendly interface for managing a blog.`,
        imageUrl:
          'https://images.unsplash.com/photo-1627534640397-561c6d443171',
        projectUrl: '#',
        tags: ['Python', 'Django', 'REST API'],
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
