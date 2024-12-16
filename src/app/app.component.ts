import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayoutModule } from './layout/app.layout.module';
import { PrimeIcons } from 'primeng/api';
import { Observable } from 'rxjs';
import { addDoc, collection, collectionData, Firestore, getDoc, getDocs } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet,AppLayoutModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'proam-angular';
  items$: Observable<any[]>
  newItem = {nombre:' ', url: ' '}

  constructor(){
    const firestore = inject(Firestore);
    const itemsCollection = collection(firestore, 'videos');

    this.items$ = collectionData(itemsCollection);

    this.addExampleData(firestore);
  }

    async addExampleData(firestore:Firestore){
     
      const itemsCollection = collection(firestore, 'videos');
      const snapshot = await getDocs(itemsCollection);

      if (snapshot.empty) {
        const exampleItem = {
          titulo: 'Video 1',
          url: 'https://www.youtube.com/watch?v=video1',
        }

        try{
          await addDoc(itemsCollection,exampleItem);
          alert('Agregado')
        } catch (error){
          console.log('No se agregó', error)
        }
      }
    } 
}
