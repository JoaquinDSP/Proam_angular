import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-renders',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './renders.component.html',
  styleUrls: ['./renders.component.scss'],
})
export class RendersComponent {
  images: any[] = [];
  responsiveOptions: any[] = [];

  constructor() {
    // Lista de imágenes de ejemplo con URLs públicas
    this.images = [
      {
        itemImageSrc: 'https://via.placeholder.com/1024x768',
        thumbnailImageSrc: 'https://via.placeholder.com/150',
        alt: 'Image 1',
        title: 'First Image',
      },
      {
        itemImageSrc: 'https://via.placeholder.com/1024x768',
        thumbnailImageSrc: 'https://via.placeholder.com/150',
        alt: 'Image 2',
        title: 'Second Image',
      },
      {
        itemImageSrc: 'https://via.placeholder.com/1024x768',
        thumbnailImageSrc: 'https://via.placeholder.com/150',
        alt: 'Image 3',
        title: 'Third Image',
      },
    ];

    // Opciones responsivas para diferentes tamaños de pantalla
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
