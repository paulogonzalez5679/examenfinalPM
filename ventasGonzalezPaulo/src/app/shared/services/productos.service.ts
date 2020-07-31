import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Producto } from '../model/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public carrito = [];
  constructor(private afs: AngularFirestore) { }
  getProductos(): Observable<any[]>{
    return this.afs.collection('productos').valueChanges();
  }

}
