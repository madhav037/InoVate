import { Component } from '@angular/core';
import { ApiAuthService } from '../api-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private _api: ApiAuthService,private _router:Router) { }
  redirect() {
    this._router.navigate(['/home']);
  }
  verifyUser() {
    let user = {
      email: this.email,
      password: this.password
    }
    this._api.registerUser(user).
      subscribe(() => {
        console.log("User registered successfully!")
        this.email = "";
        this.password = "";
        this.redirect();
      });
  }
}
