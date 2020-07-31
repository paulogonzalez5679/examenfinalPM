import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGPage } from './login-g.page';

const routes: Routes = [
  {
    path: '',
    component: LoginGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginGPageRoutingModule {}
