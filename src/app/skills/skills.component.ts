import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'assets/angular-icon.png', progress: 90 },
    { name: 'TypeScript', icon: 'assets/typescript-icon.png', progress: 85 },
    { name: 'JavaScript', icon: 'assets/javascript-icon.png', progress: 80 },
    { name: 'HTML5', icon: 'assets/html-icon.png', progress: 95 },
    { name: 'CSS3', icon: 'assets/css-icon.png', progress: 90 },
    { name: 'Node.js', icon: 'assets/nodejs-icon.png', progress: 75 },
    { name: 'Git', icon: 'assets/git-icon.png', progress: 85 },
    { name: 'Figma', icon: 'assets/figma-icon.png', progress: 70 },
    { name: 'Figma', icon: 'assets/figma-icon.png', progress: 70 },
    { name: 'Figma', icon: 'assets/figma-icon.png', progress: 70 },

  ];isDragging = false
getRandomRotation()
{
  let randomVal = (Math.random() *30) -15 ;
  return "rotate($randomVal)deg";
}
}
