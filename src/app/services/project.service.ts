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
      image: 'assets/project1.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Une application moderne utilisant Angular et .NET.',
      image: 'assets/project2.jpg',
      link: 'https://equivalence.rnu.tn/index_equiv.php',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Une application moderne utilisant Angular et .NET.',
      image: 'assets/project3.jpg',
      link: 'https://equivalence.rnu.tn/index_equiv.php',
    },
  ];

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.projects.find(project => project.id === id);
  }
}