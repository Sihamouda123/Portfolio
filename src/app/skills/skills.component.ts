import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
skills= ["angular", ".Net", "javascript" ,"angular", ".Net", "javascript","angular", ".Net", "javascript" ]
isDragging = false
getRandomRotation()
{
  let randomVal = (Math.random() *30) -15 ;
  return "rotate($randomVal)deg";
}
}
