import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    // LucideAngularModule.pick({
    //   Linkedin,
    //   Github,
    //   Mail,
    //   Globe,
    // }),
    LucideAngularModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear: number = 0;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
