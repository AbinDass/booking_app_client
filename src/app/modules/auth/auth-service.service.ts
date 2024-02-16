import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string = `http://localhost:5000/auth`;

  constructor(private httpServer: HttpClient) {}

  userRegister(data: any) {
    console.log(data, 12);
    return this.httpServer.post<any>(this.baseUrl + `/register`, data);
  }
}
