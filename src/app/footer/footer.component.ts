import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { HeaderComponent } from '../header/header.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
        RouterModule, 
        RouterLink,
        RouterOutlet, // Gestion des routes si vous avez des routes définies
        SkillsComponent, // Composant pour les compétences
        HeaderComponent, // Composant pour le header
        ProjectsComponent, // Composant pour les projets
        ExperiencesComponent, // Composant pour les expériences
        ProjectDetailsComponent,
  ], // Importez RouterModule et RouterLink ici
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  submitForm() {
    alert('Formulaire soumis !'); // Remplacez par votre logique de soumission
  }

  // Méthode pour basculer entre les modes sombre et clair
  toggleTheme() {
    document.body.classList.toggle('light-theme'); // Ajoutez votre logique de changement de thème
  }
}
