import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEventService {

  constructor(private _http: HttpClient) { }
  
  url = "http://localhost:3000/api";
  
  getAll() {
    return this._http.get(this.url+"/event/get-all-events")
  }

  updateEvent(event: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };
    return this._http.put(this.url+`/event/update-event/${event._id}`,event, httpOptions)
  }

  createEvent(event: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };
    return this._http.post(this.url+"/event/create-event",event, httpOptions)
  }
}
