import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  validDate: boolean = false;
  date: any;
  URL = 'https://node-book-appointment.herokuapp.com';
  httpParams: HttpParams;
  appointmentsGlobal: User[] = [];

  constructor(private http: HttpClient) { }

  saveAppointment(dataObj: User) {
     return this.http.post<User>(this.URL + '/book', dataObj);
  }

  getAppointments() {
    this.httpParams = new HttpParams();
    this.httpParams = this.httpParams.append('date',this.date);
    return this.http.get<User[]>(this.URL + '/appointments', {params: this.httpParams});
  }

  updateAppointment(dataObj:  User) {
    return this.http.put<User>(this.URL + '/updateAppointment', dataObj);
  }
}
