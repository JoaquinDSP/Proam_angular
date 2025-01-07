import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {
  @Input() logos: string[] = [];  // Recibe el array de logos dinámicamente

  get repeatedLogos() {
    return [...this.logos, ...this.logos];  // Duplica los logos para el carrusel
  }
}
