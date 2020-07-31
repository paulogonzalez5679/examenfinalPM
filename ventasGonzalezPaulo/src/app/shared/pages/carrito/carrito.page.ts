import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  prod = [];
  num = [539072828628];
  constructor(private router: Router, private productosService: ProductosService, private llamar: CallNumber) { }

  ngOnInit() {
    this.prod = this.productosService.carrito;
  }
  atras(id: any){
    this.router.navigate([`productos`]);

  }
  borrar()
  {
    this.prod = [''];
  }
  trackByFn(index, obj)
  {
    return obj.uid;
  }
  call(num)
  {
    this.llamar.callNumber(num, true);
  }

}
