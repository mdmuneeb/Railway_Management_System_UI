import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(
    private http: HttpClient
  ) { }
  url = 'http://localhost:3000';




  getAllBookedTickets(id: any): Observable<any>{
    return this.http.post<any>(`${this.url}/get-tickets-by-user-id`, {
      "User_ID": id
    })
  }

  getUserWantTicket(data:any): Observable<any>{
    return this.http.post<any>(`${this.url}/schedule-by-start-end`, data)
  }


  createPassenger(data:any):Observable<any>{
    return this.http.post<any>(`${this.url}/create-passenger`, data)
  }


  createTicket(data:any): Observable<any>{
    return this.http.post(`${this.url}/add-tickets`, data)
  }


}
