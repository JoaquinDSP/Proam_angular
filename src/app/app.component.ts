import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayoutModule } from './layout/app.layout.module';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet,AppLayoutModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // change 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'proam-angular';
}
