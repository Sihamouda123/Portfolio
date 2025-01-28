import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterLink], // Importez RouterModule et RouterLink ici
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
