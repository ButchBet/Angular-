import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { ForgottenComponent } from './pages/forgotten/forgotten.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistComponent } from './pages/regist/regist.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {path: 'forgot', component: ForgottenComponent},
      {path: 'login', component: LoginComponent},
      {path: 'regist', component: RegistComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],

  // exports: [RouterModule]
})
export class AuthRoutingModule { }
