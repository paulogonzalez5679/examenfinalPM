import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Observable<any[]>;

  constructor(private router: Router, private productosService: ProductosService) { }
 ngOnInit() {
   this.productos = this.productosService.getProductos();
  }

  trackByFn(index, obj)
  {
    return obj.uid;
  }
  carrito(id: any){
    this.router.navigate([`carrito`]);

  }
  agregarCarrito(producto)
  {
    this.productosService.carrito.push(producto);
  }

}
