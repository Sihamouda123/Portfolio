import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  frontEndSkills = [
    { name: 'Angular', icon: 'assets/angular-icon.png', progress: 90 },
    { name: 'TypeScript', icon: 'assets/typescript-icon.png', progress: 85 },
    { name: 'JavaScript', icon: 'assets/javascript-icon.png', progress: 80 },
    { name: 'HTML', icon: 'assets/html-icon.png', progress: 80 },
    { name: 'CSS', icon: 'assets/css-icon.png', progress: 80 },
  ];

  backEndSkills = [
    { name: '.Net', icon: 'assets/.net-icon.png', progress: 95 },
    { name: 'C#', icon: 'assets/c-sharp-icon.png', progress: 90 },
    { name: 'SQL Server', icon: 'assets/sql-server.png', progress: 75 },
    { name: 'PostgreSQL', icon: 'assets/postgre.png', progress: 75 },
    { name: 'Git', icon: 'assets/github-logo.png', progress: 85 },
  ];

  isDragging = false;

  getRandomRotation() {
    let randomVal = (Math.random() * 30) - 15;
    return `rotate(${randomVal}deg)`;
  }
}