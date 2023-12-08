import { HttpClient } from '@angular/common/http';
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
}
