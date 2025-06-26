import {
  Component,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { Project } from '../../projects.component';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  project = input<Project | null>(null);
  isVisible = input<boolean>(false);
  closeModal = output<void>();

  showContent = signal<boolean>(false);
  backdropEl = viewChild<ElementRef<HTMLDivElement>>('backdrop');

  constructor() {
    effect(() => {
      if (this.isVisible()) {
        setTimeout(() => this.showContent.set(true), 100);
      } else {
        this.showContent.set(false);
      }
    });
  }

  close() {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent) {
    const backdropEl = this.backdropEl();
    if (!backdropEl) {
      console.error('Backdrop element not found'); // This shouldn't happen
      return;
    }
    // Close only if the backdrop itself is clicked, not the content
    if ((event.target as HTMLDivElement) == backdropEl.nativeElement) {
      this.close();
    }
  }
}
