import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  profileForm=new FormGroup({
    username:new FormControl('',[Validators.min(3),Validators.max(30)]),
    email:new FormControl('',[Validators.email,Validators.max(254)]),
    password:new FormControl('',[Validators.min(6)])
  });

  setProfile()
  {
    console.log(this.profileForm.value);
  }
}
