import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { __param } from 'tslib';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productoCollection: AngularFirestoreCollection<Producto>;

  constructor(private db: AngularFirestore) {
    this.productoCollection = this.db.collection<Producto>('productos');
  }

  getAllProductos(): Observable<DocumentChangeAction<Producto> [] >{
    return this.productoCollection.snapshotChanges();
  }

  getProducto(productoId: string) {
    return this.productoCollection.doc<Producto>(productoId).snapshotChanges();
  }

  createProducto(newProduct: Producto): Promise<any>{
    return this.productoCollection.add(newProduct);
  }


  editarProducto(data: Producto, productoId: string): Promise<void> {
    return this.productoCollection.doc<Producto>(productoId).update(data);
  }
}
