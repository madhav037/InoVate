import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrl: './eventform.component.css'
})
export class EventformComponent {
  eventForm:FormGroup=new FormGroup({
    event_name:new FormControl('',[Validators.required,Validators.max(20)]),
    event_image:new FormControl('',[Validators.required]),
    event_description:new FormControl('',[Validators.required,Validators.min(20),Validators.max(50)]),
    reg_start_date:new FormControl('',[Validators.required,Validators.pattern('/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g')]),
    event_start_date:new FormControl('',[Validators.required]),
    reg_end_date:new FormControl('',[Validators.required]),
    event_end_date:new FormControl('',[Validators.required]),
    event_location:new FormControl('',[Validators.required]),
    no_team:new FormControl(0),
    ppt:new FormControl(0)
    
  });
  setEvent()
  {
    console.log(this.eventForm.value);
  }
  

  //toggle code for team allow
  isTeam=true;
  toggleButton()
  {
    this.isTeam=!this.isTeam;
  }
}
