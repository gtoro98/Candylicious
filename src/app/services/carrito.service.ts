import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Bolsa } from '../models/bolsa';
import { Carrito } from '../models/carrito';
import { CarritoComponent } from '../pages/carrito/carrito.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoCollection: AngularFirestoreCollection<Carrito>;
  private bolsaCollection: AngularFirestoreCollection<Bolsa>;

  constructor(private db: AngularFirestore,) { 
    this.carritoCollection = this.db.collection<Carrito>('carritos');
    this.bolsaCollection = this.db.collection<Bolsa>('bolsas');
  }

  createCarrito(carrito: Carrito): Promise<any>{
    return this.carritoCollection.add(carrito);
  }

  getCarrito(userId: string) {
    return this.carritoCollection.ref.where('userId', '==' , userId);
  }
  getUserDetails(userId: string) {
    return this.carritoCollection.ref.where('userId', '==' , userId);
  }

  agregarBolsa(nuevaBolsa: Bolsa, carrito: Carrito): Promise<any>{
    console.log(carrito.userId)
    carrito.bolsas.push(nuevaBolsa)
    this.carritoCollection.ref.where('userId', '==' , carrito.userId).get().then(res => {
      this.carritoCollection.doc<Carrito>(res.docs[0].id).update(carrito);
    })
  

    
    return this.bolsaCollection.add(nuevaBolsa)
  }
}
