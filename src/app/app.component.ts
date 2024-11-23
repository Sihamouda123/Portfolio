import { ApplicationRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected the typo here
})
export class AppComponent implements OnInit {
  constructor(
    private applicationRef: ApplicationRef,
  ) {
  }

  ngOnInit(): void {
    // Check application stability before starting interval
    this.applicationRef.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      setInterval(() => this.checkWatering(), 1000);
    });
  }

  // Assuming checkWatering is implemented
  private checkWatering(): void {
    console.log('Checking watering...');
    // Add your logic here
  }
}
