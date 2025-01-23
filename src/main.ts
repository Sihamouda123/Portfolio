import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SkillsComponent } from './app/skills/skills.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { ExperiencesComponent } from './app/experiences/experiences.component';
import { ProjectDetailsComponent } from './app/project-details/project-details.component';

// Définissez les routes
const routes: Routes = [
  { path: 'skills', component: SkillsComponent }, // Route pour la section Compétences
  { path: 'projects', component: ProjectsComponent }, // Route pour la section Projets
  { path: 'experiences', component: ExperiencesComponent }, // Route pour la section Expériences
  { path: 'projects/:id', component: ProjectDetailsComponent }, // Route pour les détails du projet
  { path: '**', redirectTo: '' }, // Redirection vers la page d'accueil pour les routes inconnues
];

// Bootstrap l'application avec le routage
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Fournit le routage
}).catch((err) => console.error(err));