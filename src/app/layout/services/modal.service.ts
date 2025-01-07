import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // enable service on all app
})
export class ModalService {
  private modalOpenSubject = new BehaviorSubject<boolean>(false); // inicial state = closed
  modalOpen$ = this.modalOpenSubject.asObservable(); 

  openModal() {
    this.modalOpenSubject.next(true); // change modal to open 
  }

  closeModal() {
    this.modalOpenSubject.next(false); // change modal to closed
  }
}
