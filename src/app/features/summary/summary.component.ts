import { Component, output } from '@angular/core';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  host: {
    class: 'app-section',
  },
  imports: [ScrollAnimationDirective],
})
export class SummaryComponent {
  viewWork = output<void>();
}
