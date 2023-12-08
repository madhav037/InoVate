import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
<<<<<<< HEAD
import { EventformComponent } from './eventform/eventform.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SingupComponent},
  {path:'eventform',component:EventformComponent}
=======
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'signup', component: SingupComponent },
  {path:'home',component:HomeComponent}
>>>>>>> 740bd26835047c4c685ebc8c8b9bddbb4684626b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
