import { ApplicationRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SkillsComponent,HeaderComponent,ProjectsComponent,ExperiencesComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected the typo here
})
export class AppComponent implements OnInit {
  constructor(
    private applicationRef: ApplicationRef,
  ) {
  }

  ngOnInit(): void {


  }
}
