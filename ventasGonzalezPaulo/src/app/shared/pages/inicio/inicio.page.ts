import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private auth: LoginService,
              private router: Router) { }

  ngOnInit() {
  }
  carrito(id: any){
    this.router.navigate([`carrito`]);

  }
  productos(id: any){
    this.router.navigate([`productos`]);

  }


}
