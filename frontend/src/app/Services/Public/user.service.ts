import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fileURLToPath } from 'node:url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  UserLogin(data:any):Observable<any>{
    return this.http.get<any>(`${this.url}/login`, data)
  }
}
