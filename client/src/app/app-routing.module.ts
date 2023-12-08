import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { EventformComponent } from './eventform/eventform.component';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SingupComponent},
  {path:'eventform',component:EventformComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
