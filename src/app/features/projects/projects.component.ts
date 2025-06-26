import { Component, signal } from '@angular/core';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

export interface Project {
  title: string;
  tech: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  host: {
    class: 'app-section',
  },
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [ProjectModalComponent, ScrollAnimationDirective],
})
export class ProjectsComponent {
  isModalVisible = signal<boolean>(false);
  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      title: 'AirBnB Clone',
      tech: 'Python, HTML, CSS, JavaScript, Data Structures, Unit Testing',
      description: `
          <p>Developed a foundational web application clone of AirBnB, focusing on core backend and data management principles.</p>
          <ul class="list-disc list-inside mt-2">
              <li>Implemented a robust serialization/deserialization workflow for efficient data persistence.</li>
              <li>Designed and developed AirBnB-specific classes inheriting from a BaseModel.</li>
              <li>Created a custom abstracted storage engine for file-based data management and developed comprehensive unit tests.</li>
          </ul>`,
    },
    {
      title: 'ImageX',
      tech: 'GoLang, Gin Framework, Swagger',
      description: `
          <p>Created an image converter using GoLang and the Gin framework, showcasing strong backend development skills.</p>
          <ul class="list-disc list-inside mt-2">
              <li>Implemented real-time image transformations including blur, sepia, monotone, and resize, exploring the feasibility of CDN-like API services.</li>
              <li>Documented the project using Swagger, demonstrating experience with API design and documentation.</li>
              <li>Explored practical implications of real-time image processing in production scenarios.</li>
          </ul>`,
    },
    {
      title: 'Monty Interpreter',
      tech: 'C, Stack Data Structures, Interpreter Design',
      description: `
          <p>Built an interpreter for the Monty programming language, leveraging Stack data structures to efficiently implement operations.</p>
          <ul class="list-disc list-inside mt-2">
              <li>Explored the internal workings of interpreters, gaining practical experience in fundamental compiler design principles.</li>
              <li>Developed a deep understanding of algorithms and data structures—foundational for data processing and manipulation.</li>
          </ul>`,
    },
    {
      title: 'Virtual Deal Website',
      tech: 'Angular, dayjs, Web Performance Optimization',
      description: `
          <p>Developed a virtual deal website using Angular, demonstrating strong front-end development capabilities.</p>
          <ul class="list-disc list-inside mt-2">
              <li>Implemented efficient caching strategies to optimize performance and user experience.</li>
              <li>Achieved above 95 scores for each page on Web.dev PageSpeed Insights, highlighting a focus on high-performance web development.</li>
              <li>Utilized dayjs for robust date manipulation and management within the application.</li>
          </ul>`,
    },
    {
      title: 'Portfolio Website',
      tech: 'Angular, TypeScript, TailwindCSS, Anime.js, Web Performance Optimization',
      description: `
          <p>Developed a portfolio website using Angular and TypeScript, showcasing proficiency in front-end development.</p>
          <ul class="list-disc list-inside mt-2">
              <li>Implemented responsive design, ensuring optimal user experience across different screen sizes.</li>
              <li>Optimized performance and user experience through web performance optimization techniques.</li>
              <li>Utilized Anime.js for engaging animations and transitions on the website.</li>
              <li>Utilized TailwindCSS for efficient styling and responsive layout.</li>
          </ul>`,
    },
  ];

  openModal(project: Project) {
    this.selectedProject.set(project);
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }
}
