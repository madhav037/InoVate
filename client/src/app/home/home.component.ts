import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _api: ApiEventService) {
  }
  search: string = ''
  data: any = []
  filter: any = []
  ongoin: any = []
  open: any = []
  // ngOnInit() {
  //   this._api.getAll().subscribe((res: any) => {
  //     this.data = res
  //     this.filter = res
  //     console.log(this.data)
  //   })
    
  // }
  searchEvent() {
    this.filter = this.data.filter((res: any) => {
      console.log(res)
      return res.title.toLocaleLowerCase().match(this.search.toLocaleLowerCase())
    })
  }

  // async createEventt(event: any) {
  //   console.log(event)
  //   try {
  //     const response = await fetch('http://localhost:3000/api/event/create-event', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //       body: JSON.stringify(event)
  //     }).then((res) => {
  //       res.json()}).then((data) => {
  //         console.log(data)
  //       }).catch((err) => {
  //         console.log(err)
  //       })
  //     }
  //     catch (err) {
  //       console.log(err)
  //     }}
  
  ngOnInit() { this.onGoing() , this.allOpenEvents(), this.updateRegestration() }

  updateRegestration() {
    let data : any = [];
    this._api.getAll().subscribe(res => {
      console.log(res);
      data = res; // Assuming data is declared using 'const' or 'let'
      
      data.forEach((element : any) => {
        const currentDate = new Date();
        const resgestrationEndDate = new Date(element.resgestrationEndDate);

        if (resgestrationEndDate.toDateString() < currentDate.toDateString()) {
          element.resgestrationOpen = false;
          this._api.updateEvent(element).subscribe(res => {
            console.log(res);
          });
        }
        
      });
    }
    )}


  async onGoing() {
    const currentDate = new Date();
    let data : any = [];
  this._api.getAll().subscribe(res => {
  console.log(res);
  data = res; // Assuming data is declared using 'const' or 'let'
  
  const ongoingEvents = data.filter((event: any) => {
    const eventStartDate = new Date(event.startingDate);
    console.log("start", eventStartDate.toDateString());
    console.log("current", currentDate.toDateString());
    // Check if the event is starting today
    return eventStartDate.toDateString() === currentDate.toDateString();
  });

    console.log(ongoingEvents);
    this.ongoin = ongoingEvents;
});

  }
  allOpenEvents() {
    let data : any = [];
    this._api.getAll().subscribe(res => {
      console.log(res);
      data = res; // Assuming data is declared using 'const' or 'let'
      
      const openEvents = data.filter((event: any) => {
        return event.resgestrationOpen === true;
      });
      
      this.open = openEvents;
      console.log(openEvents);

    });
  }
}
