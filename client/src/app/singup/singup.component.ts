import { Component } from '@angular/core';
import { ApiAuthService } from '../api-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  constructor(private _api: ApiAuthService,private _router:Router) { }
  
  
  Form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });
  

  
  createUser() {
    console.log(this.Form.value);
    this._api.createUser(this.Form.value)
      .subscribe((res) => {
        console.log(res);
        this._router.navigate(['/home']);
      }
        
      )
  }
  validateForm() { 
    console.log(this.Form);
    if (this.Form.valid) {
      this.createUser();
    }
  }
}
