import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegistComponent } from './pages/regist/regist.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgottenComponent } from './pages/forgotten/forgotten.component';



@NgModule({
  declarations: [
    RegistComponent,
    LoginComponent,
    ForgottenComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
