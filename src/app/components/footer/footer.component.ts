import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer', // Este selector debe coincidir con <app-footer> en tu HTML
  standalone: true, // Importante para standalone components
  imports: [CommonModule], // Si utilizas directivas como *ngIf, *ngFor
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
