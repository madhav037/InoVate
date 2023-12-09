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
  ngOnInit() {
    this._api.getAll().subscribe((res: any) => {
      this.data = res
      this.filter = res
      console.log(this.data)
    })
    
  }
  searchEvent() {
    this.filter = this.data.filter((res: any) => {
      console.log(res)
      return res.title.toLocaleLowerCase().match(this.search.toLocaleLowerCase())
    })
  }
}
