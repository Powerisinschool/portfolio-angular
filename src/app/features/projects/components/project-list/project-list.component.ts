import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../../shared/models/project.model';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-project-list',
  standalone: false,

  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private apiService: ApiService) {
    this.projects$ = new Observable<Project[]>(); // Initialize with an empty array
  }

  ngOnInit(): void {
    this.projects$ = this.apiService.getProjects();
  }
}
