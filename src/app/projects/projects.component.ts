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
  selectedProject: any = null; // Pour stocker le projet sélectionné
  showPopup: boolean = false; // Pour contrôler l'affichage de la popup

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) {
    this.projects = this.projectService.getProjects();
  }

  openProject(id: number) {
    this.selectedProject = this.projects.find((project: any) => project.id === id);
    this.showPopup = true; // Afficher la popup
  }

  closePopup() {
    this.showPopup = false; // Cacher la popup
  }
}