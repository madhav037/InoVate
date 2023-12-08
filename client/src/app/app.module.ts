import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component'; // Import the missing SingupComponent
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { EventformComponent } from './eventform/eventform.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 740bd26835047c4c685ebc8c8b9bddbb4684626b

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
<<<<<<< HEAD
    EventformComponent // Add SingupComponent to the declarations array
=======
    HomeComponent // Add SingupComponent to the declarations array
>>>>>>> 740bd26835047c4c685ebc8c8b9bddbb4684626b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
