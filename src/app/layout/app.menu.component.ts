import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { LayoutService } from './service/app.layout.service';

// Interface para cada equipo
interface Team {
  nombre: string;
}

// Interface para cada categoría
interface Categoria {
  nombre: string;
  teams: Team[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = []; // Estructura del menú
  categorias$: Observable<Categoria[]>; // Observable para las categorías

  constructor(public layoutService: LayoutService) {
    const firestore = inject(Firestore); // Inyectar el servicio Firestore
    const categoriasCollection = collection(firestore, 'Categorias'); // Referencia a la colección 'Categorias'

    // Mapeo de datos desde Firestore
    this.categorias$ = collectionData(categoriasCollection, { idField: 'id' }).pipe(
      map((categorias: DocumentData[]) =>
        categorias.map((categoria: DocumentData) => ({
          nombre: categoria['name'], // Nombre de la categoría
          teams: categoria['teams']?.map((team: any) => ({
            nombre: team['name'], // Nombre del equipo
          })) || [], // Si no hay equipos, devuelve un array vacío
        }))
      )
    );
  }

  ngOnInit() {
    // Inicializamos el modelo de menú con una categoría básica (Home)
    this.model = [
      {
        label: '    ', // Título sobre "inicio"
        items: [
          { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'Equipos',
        items: [],
      },
      {
        label: 'Fixture',
        items: [
          { label: 'Copa +50', icon: 'fa-regular fa-calendar-days' },
          { label: 'Copa Comercial', icon: 'fa-regular fa-calendar-days' },
        ],
      },
      {
        label: 'Documentos',
        items: [
          {
            label: 'Reglamento',
            icon: 'fa-solid fa-gavel',
            url: 'assets/PDF/reglamento abogados.pdf',
            target: '_blank',
          },
        ],
      },
      {
        label: 'Contactos',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'WhatsApp',
            icon: 'fa-brands fa-whatsapp',
            url: 'https://wa.me/+5493413139012?text=%C2%A1Hola!%20Me%20comunico%20con%20Liga%20de%20Campo%20a%20fines%20de%20acercarles%20una%20consulta.',
            target: '_blank',
          },
          {
            label: 'Email',
            icon: 'fa-regular fa-envelope',
            url: 'mailto:soporte@ligadecampo.com?subject=Consulta&body=%C2%A1Hola!%20Me%20comunico%20con%20Liga%20de%20Campo%20a%20fines%20de%20acercarles%20una%20consulta.',
            target: '_blank',
          },
          {
            label: 'Instagram',
            icon: 'fa-brands fa-instagram',
            url: 'https://www.instagram.com/joa.spretz/',
            target: '_blank',
          },
          {
            label: 'Facebook',
            icon: 'fa-brands fa-facebook',
            url: 'https://www.facebook.com/joa.spretz',
            target: '_blank',
          },
        ],
      },
    ];

    // Suscripción al observable y construcción del modelo del menú
    this.categorias$.subscribe(categorias => {
      console.log('Datos de Firestore:', categorias); // Verifica los datos recuperados

      // Añadimos dinámicamente las categorías al menú
      categorias.forEach((categoria: Categoria) => {
        const categoriaItem = {
          label: categoria.nombre,
          icon: 'fa-solid fa-trophy',
          items: categoria.teams.map((team: Team) => ({
            label: team.nombre,
            icon: 'fa-solid fa-shield',
            routerLink: ['/uikit/formlayout'], // Enlace (ajústalo si es necesario)
          })),
        };

        // Añadir cada categoría con sus equipos a la sección de Equipos
        this.model[1].items.push(categoriaItem);
      });

      console.log('Modelo del menú estructurado:', this.model); // Verifica el modelo final
    });
  }
}
