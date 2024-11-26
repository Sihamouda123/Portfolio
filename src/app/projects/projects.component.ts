import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'A7LNA NES FEL KAYES',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Découvrez ce projet conçu pour résoudre des problèmes concrets.',
      image: 'assets/github-logo.png',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Une application moderne utilisant Angular et .NET pour une expérience utilisateur immersive.',
      image: 'https://via.placeholder.com/300',
      link: 'https://equivalence.rnu.tn/index_equiv.php',
    },

    {
      title: 'Project 3',
      description: 'Une application moderne utilisant Angular et .NET pour une expérience utilisateur immersive.',
      image: 'https://via.placeholder.com/300',
      link: 'https://equivalence.rnu.tn/index_equiv.php',
    },
    // Ajoutez plus de projets ici
  ];

  openProject(link: string) {
    window.open(link, '_blank');
  }
  
}
