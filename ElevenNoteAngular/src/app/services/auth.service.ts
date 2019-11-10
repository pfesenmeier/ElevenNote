import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';

const Api_Url = 'http://localhost:4200/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(regUserData: RegisterUser) {
    return this.http.post(`${Api_Url}/api/account/Register`, regUserData);
  }
}
