import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  picture;
  name;
  email;
  constructor( private auth: LoginService,
               private router: Router
 ) { }

  ngOnInit() {
  }
  async loginGoogle(){
    let error = await this.auth.googleLogin();
    if ( error === undefined){
      this.router.navigate(['inicio']);
    }else{
      alert(JSON.stringify(error));
    }
  }
  carrito(id: any){
    this.router.navigate([`carrito`]);

  }
  productos(id: any){
    this.router.navigate([`productos`]);

  }
  inicio(id: any){
    this.router.navigate([`inicio`]);

  }


}
