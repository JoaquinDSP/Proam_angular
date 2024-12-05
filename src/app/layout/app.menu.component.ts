import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: '    ', //title over "inicio"
        items: [
          { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'Equipos',
        items: [
          {
            label: 'Copa +50',
            icon: 'fa-solid fa-trophy',
            items: [
              {
                label: 'Diablitos Rojos',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Toros Rosso',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Charmander',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Vito Corleone FC',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Rata Blanca Team',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Craneos Despelechados',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
            ],
          },
          {
            label: 'Copa Comercial',
            icon: 'fa-solid fa-trophy',
            items: [
              {
                label: 'Bondiola de Carne',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Ramonestones',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Calandria Team',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Chimangos locos',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Jaimicos fuchibol',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
              {
                label: 'Retorcidos FC',
                icon: 'fa-solid fa-shield',
                routerLink: ['/uikit/formlayout'],
              },
            ],
          },
        ],
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
            label: 'Reglameto',
            icon: 'fa-solid fa-gavel',
            routerLink: ['/uikit/formlayout'],
          },
          {
            label: 'Boletin',
            icon: 'fa-solid fa-newspaper',
            url: ['https://www.sensacine.com/peliculas/pelicula-111112/'],
            target: '_self',
          },
        ],
      },
      {
        label: 'Contactos',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          /*{
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']         //keep cause is desplegable, idk
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },*/
            {
                        label: 'WhatsApp',
                        icon: 'fa-brands fa-whatsapp',
                        url: 'https://wa.me/+5493413139012?text=%C2%A1Hola!%20Me%20comunico%20con%20Liga%20de%20Campo%20a%20fines%20de%20acercarles%20una%20consulta.',
                        target: '_blank'
                    },
                    
          {
            label: 'Email',
                        icon: 'fa-regular fa-envelope',
                        url: 'https://wa.me/+5493413139012?text=%C2%A1Hola!%20Me%20comunico%20con%20Liga%20de%20Campo%20a%20fines%20de%20acercarles%20una%20consulta.',
                        target: '_blank'
          },
          {
            label: 'Instagram',
            icon: 'fa-brands fa-instagram',
            routerLink: ['/notfound'],
          },
          {
            label: 'Facebook',
            icon: 'fa-brands fa-facebook',
            routerLink: ['/notfound'],
          },
        ],
      },
    ];
  }
}
