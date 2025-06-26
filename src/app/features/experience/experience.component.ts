import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-experience',
  host: {
    class: 'app-section',
  },
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  imports: [ScrollAnimationDirective],
})
export class ExperienceComponent {}
