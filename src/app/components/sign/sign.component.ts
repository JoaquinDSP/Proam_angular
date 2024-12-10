import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [CheckboxModule,ButtonModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})
export class SignComponent {

}
