import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChange, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensajeCollection: AngularFirestoreCollection<Mensaje>;

  constructor(private db: AngularFirestore, private fireStorage: AngularFireStorage) { 
    this.mensajeCollection = this.db.collection<Mensaje>('mensajes');
  }

  createMensaje(newMensaje: Mensaje): Promise<any>{
    return this.mensajeCollection.add(newMensaje);
  }

  getAllMensajes(): Observable<DocumentChangeAction<Mensaje> []>{
   
      return this.mensajeCollection.snapshotChanges();
    
  }
}
