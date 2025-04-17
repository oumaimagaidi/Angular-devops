import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AppComponent {
  chambre = {
    nomChambre: '',
    typec: '',
    bloc: {
      idBloc: 1
    }
  };

  typesChambres = ['SIMPLE', 'DOUBLE', 'TRIPLE'];
  message: string = '';

  constructor(private http: HttpClient) { }

  addChambre() {
    console.log('Chambre à envoyer:', this.chambre);
    this.http.post('http://172.23.85.35:8089/foyer/chambre/add-chambre', this.chambre)
      .subscribe({
        next: (response) => {
          console.log('Réponse du serveur:', response);
          this.message = 'Chambre ajoutée avec succès!';
          this.chambre = {
            nomChambre: '',
            typec: '',
            bloc: {
              idBloc: 1
            }
          };
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la chambre:', error);
          this.message = 'Erreur lors de l\'ajout de la chambre';
        }
      });
  }
}