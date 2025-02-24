import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayoutModule } from './layout/app.layout.module';
import { PrimeIcons } from 'primeng/api';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet,AppLayoutModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'proam-angular';
}
