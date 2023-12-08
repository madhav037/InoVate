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

  data:any=[]
  ngOnInit() {
    this._api.getAll().subscribe((res: any) => {
      this.data = res
      console.log(this.data[0].title)
    })
    
  }
}
