import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any;

  constructor(
    private router: Router, // Injection du Router
    private projectService: ProjectService
  ) {
    this.projects = this.projectService.getProjects();
  }

  openProject(id: number) {
    this.router.navigate(['/projects', id]); // Navigation vers la page de détails
  }
}