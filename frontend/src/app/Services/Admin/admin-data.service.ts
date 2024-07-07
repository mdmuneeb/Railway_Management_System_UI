import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';
  To = "";
  From = "";
  Date = "";
  name = "";
  
  
  
  getAllTrains():Observable<any>{
    return this.http.get(`${this.url}/get-trains`)
  }

  getAllTicket():Observable<any>{
    return this.http.get<any>(`${this.url}/get-all-tickets`)
  }

  getAllSchedule():Observable<any>{
    return this.http.get<any>(`${this.url}/schedules`)
  }

  getAllPassengers():Observable<any>{
    return this.http.get<any>(`${this.url}/passengers`)
  }

  transferInfo(to: string, from: string, date: string){
    this.To = to
    this.From = from
    this.Date = date
  }

  getTicketById(data:any){
    return this.http.post<any>(`${this.url}/get-tickets`, data)
  }

  getTrainById(id:any): Observable<any>{
    return this.http.post<any>(`${this.url}/get-trains-by-id`, {
      train_id: id
    })
  }

  updateTrain(data:any):Observable<any>{
    return this.http.put<any>(`${this.url}/update-trains`, data)
  }

}
