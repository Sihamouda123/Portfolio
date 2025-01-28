import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects = [
    {
      id: 1,
      title: 'A7LNA NES FEL KAYES',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'assets/html-icon.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Une application moderne utilisant Angular et .NET.',
      //image: 'assets/project2.jpg',
      link: 'https://equivalence.rnu.tn/index_equiv.php',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Une application moderne utilisant Angular et .NET.',
      //image: 'assets/project3.jpg',
      link: 'https://equivalence.rnu.tn/index_equiv.php',
    },
  ];

  getProjects() {
    return [
      {
        id: 1,
        title: 'Projet 1',
        image : "assets/html-icon.png",
        description: 'Ceci est une description détaillée du projet 1.',
        images: [
          'assets/html-icon.png',
          'assets/html-icon.png',
          'assets/html-icon.png'
        ],
        technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js'],
        link: 'https://equivalence.rnu.tn/index_equiv.php'
      },
      {
        id: 2,
        title: 'Projet 2',
        image : "assets/html-icon.png",
        description: 'Ceci est une description détaillée du projet 2.',
        images: [
          'assets/html-icon.png',
          'assets/html-icon.png',
          'assets/html-icon.png'
        ],
        technologies: ['React', 'JavaScript', 'CSS', 'Firebase'],
        link: 'https://equivalence.rnu.tn/index_equiv.php'
      }
      // Ajoutez d'autres projets ici
    ];
  }

  getProjectById(id: number) {
    return this.projects.find(project => project.id === id);
  }
}