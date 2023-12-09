import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { EventformComponent } from './eventform/eventform.component';

import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { DetailedeventComponent } from './detailedevent/detailedevent.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SingupComponent},
  {path:'eventform',component:EventformComponent},
  {path:'home',component:HomeComponent},
  {path:'userprofile', component:UserProfileComponent},
  { path: 'home', component: HomeComponent },
  { path: 'userprofile', component:  UserprofileComponent},
  { path: 'detailedevent', component:  DetailedeventComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
