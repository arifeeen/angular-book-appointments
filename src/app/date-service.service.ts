import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  validDate: boolean = false;
  date: any;

  constructor() { }
}
