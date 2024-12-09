import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';  
import { ButtonModule } from 'primeng/button'; 

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss'],
  standalone: true,
  imports: [TableModule, ButtonModule],
})
export class PositionsComponent {
 
  teams = [
    { name: 'Alemania', played: 10, won: 6, drawn: 2, lost: 2, gf: 20, ga: 10, points: 20, logo: 'alemania.png' },
    { name: 'Argentina', played: 10, won: 5, drawn: 3, lost: 2, gf: 18, ga: 12, points: 18, logo: 'argentina.png' },
    { name: 'Boca', played: 10, won: 4, drawn: 3, lost: 3, gf: 15, ga: 14, points: 15, logo: 'boca.png' },
    { name: 'Brazil', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'brazil.png' },
    { name: 'Peru', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'peru.png' },
    { name: 'Portugal', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'portugal.png' },
    { name: 'River', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'river.png' },
    { name: 'Chelsea', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'chelsea.png' }
  ];

  refreshTeams() {
    this.teams = [
      { name: 'Alemania', played: 10, won: 6, drawn: 2, lost: 2, gf: 20, ga: 10, points: 20, logo: 'alemania.png' },
      { name: 'Argentina', played: 10, won: 5, drawn: 3, lost: 2, gf: 18, ga: 12, points: 18, logo: 'argentina.png' },
      { name: 'Boca', played: 10, won: 4, drawn: 3, lost: 3, gf: 15, ga: 14, points: 15, logo: 'boca.png' },
      { name: 'Brazil', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'brazil.png' },
      { name: 'Peru', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'peru.png' },
      { name: 'Portugal', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'portugal.png' },
      { name: 'River', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'river.png' },
      { name: 'Chelsea', played: 10, won: 3, drawn: 4, lost: 3, gf: 12, ga: 13, points: 13, logo: 'chelsea.png' }
    ];
  }
}
