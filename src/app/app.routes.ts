import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';

// Exportez la constante `routes`
export const routes: Routes = [
  { path: 'skills', component: SkillsComponent }, // Route pour la section Compétences
  { path: 'projects', component: ProjectsComponent }, // Route pour la section Projets
  { path: 'experiences', component: ExperiencesComponent }, // Route pour la section Expériences
  { path: '**', redirectTo: '' }, // Redirection vers la page d'accueil pour les routes inconnues
];