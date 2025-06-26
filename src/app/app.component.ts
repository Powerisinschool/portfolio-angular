import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { SkillsComponent } from './features/skills/skills.component';
import { SummaryComponent } from './features/summary/summary.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';
import { AnimationStateService } from './shared/services/animation-state.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SummaryComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    PreloaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = signal('portfolio');
  private readonly animationStateService = inject(AnimationStateService);
  isScrolled = signal(false);

  private readonly summarySection = viewChild('summary', {
    read: ElementRef,
  });
  private readonly skillsSection = viewChild('skills', { read: ElementRef });
  private readonly experienceSection = viewChild('experience', {
    read: ElementRef,
  });
  private readonly projectsSection = viewChild('projects', {
    read: ElementRef,
  });
  private readonly contactSection = viewChild('contact', {
    read: ElementRef,
  });
  private readonly footer = viewChild('footer', { read: ElementRef });

  protected readonly sections = {
    summary: this.summarySection,
    skills: this.skillsSection,
    experience: this.experienceSection,
    projects: this.projectsSection,
    contact: this.contactSection,
  } as const;

  activeSection = signal<keyof typeof this.sections>('summary');
  private isNavigating = false;

  constructor() {
    // this.animationStateService.preloaderFinished.set(true);
  }

  ngAfterViewInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_event: Event): void {
    this.isScrolled.set(window.scrollY > 0);

    if (this.isNavigating) {
      return;
    }

    let currentSection: keyof typeof this.sections = 'summary';
    const threshold = window.innerHeight * 0.4; // When top of section is 40% from viewport top

    for (const sectionName of Object.keys(
      this.sections,
    ) as (keyof typeof this.sections)[]) {
      const indexedSection = this.sections[sectionName]();
      if (indexedSection) {
        const sectionElement = indexedSection.nativeElement;
        const rect = sectionElement.getBoundingClientRect();

        if (rect.top < threshold) {
          currentSection = sectionName;
        }
      }
    }

    // Special check for the contact section when scrolling to the bottom
    const footerEl = this.footer()?.nativeElement;
    if (footerEl) {
      const footerRect = footerEl.getBoundingClientRect();
      // If the top of the footer is visible in the viewport, set 'contact' as active
      if (footerRect.top < window.innerHeight) {
        currentSection = 'contact';
      }
    }

    if (this.activeSection() !== currentSection) {
      this.activeSection.set(currentSection);
    }
  }

  handleSectionChange(sectionName: keyof typeof this.sections): void {
    this.isNavigating = true;
    this.activeSection.set(sectionName);
    const sectionElement = this.sections[sectionName]()?.nativeElement;

    console.log('Section name: ', sectionName);
    console.log('Active section: ', this.activeSection());

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        this.isNavigating = false;
      }, 800);
    } else {
      this.isNavigating = false;
    }
  }

  onPreloaderFinished(): void {
    this.animationStateService.preloaderFinished.set(true);
  }
}
