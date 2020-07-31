import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginGPageRoutingModule } from './login-g-routing.module';

import { LoginGPage } from './login-g.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginGPageRoutingModule
  ],
  declarations: [LoginGPage]
})
export class LoginGPageModule {}
