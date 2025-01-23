import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const projectId = +this.route.snapshot.paramMap.get('id')!; // Récupère l'ID depuis l'URL
    this.project = this.projectService.getProjectById(projectId); // Trouve le projet correspondant
    console.log('Project ID:', projectId); // Debug : Affiche l'ID du projet
    console.log('Project:', this.project); // Debug : Affiche les détails du projet
  }
}