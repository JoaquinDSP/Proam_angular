import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  // Obtener las categorías y sus equipos
  getCategorias(): Observable<any[]> {
    const categoriasCollection = collection(this.firestore, 'categorias');
    return collectionData(categoriasCollection, { idField: 'id' });
  }
}
