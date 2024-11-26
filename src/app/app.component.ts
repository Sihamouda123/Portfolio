import { ApplicationRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Gère les routes Angular
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Gestion des routes si vous avez des routes définies
    SkillsComponent, // Composant pour les compétences
    HeaderComponent, // Composant pour le header
    ProjectsComponent, // Composant pour les projets
    ExperiencesComponent, // Composant pour les expériences
    FooterComponent, // Composant pour le footer
  ],
  templateUrl: './app.component.html', // HTML de votre composant racine
  styleUrls: ['./app.component.scss'], // Fichier de styles spécifique à ce composant
})
export class AppComponent implements OnInit {
  constructor(private applicationRef: ApplicationRef) {}

  ngOnInit(): void {
    // Code d'initialisation si nécessaire
  }
}
