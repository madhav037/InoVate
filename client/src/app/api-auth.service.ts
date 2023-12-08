import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private _http: HttpClient) { }
  url="http://localhost:3000/api";
  registerUser(user: any) {
    return this._http.post(this.url + "/auth/signin",user); 
  }
}
