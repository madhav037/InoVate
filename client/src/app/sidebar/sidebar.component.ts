import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private _apiEvent: ApiEventService) { }
  upcomming: any = []
  ngOnInit() { this.upcommingEvents() }
  upcommingEvents() {
  const currentDate = new Date();
  let data : any = [];
this._apiEvent.getAll().subscribe(res => {
  console.log(res);
  data = res; // Assuming data is declared using 'const' or 'let'
  
  const upcommingEvents = data.filter((event: any) => {
    const eventStartDate = new Date(event.startingDate);
    // console.log("start", eventStartDate.toDateString());
    // console.log("current", currentDate.toDateString());
    // Check if the event is starting today
    return eventStartDate.toDateString() > currentDate.toDateString();
  });
  this.upcomming = upcommingEvents;
  console.log(upcommingEvents);
});
  }
  

  
}
