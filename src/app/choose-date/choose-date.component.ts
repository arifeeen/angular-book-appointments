import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../date-service.service';

@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.css']
})
export class ChooseDateComponent implements OnInit {
  date: any;
  todayDate: any;
  appointmentDate: any;
  timings = ['9 AM','10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']

  constructor(public dateService: DateService, private router: Router) {
    this.todayDate = new Date();
    this.todayDate = this.todayDate.toLocaleDateString('en-CA');
  
   }

  ngOnInit(): void {
  }

  onChangeDate(newValue) {
    if (newValue< this.todayDate) {
      alert('Date cannot be in the past.');
      return;
    }

    this.dateService.validDate = true;
    this.dateService.date = newValue;
  } 

  onSelectTime(id: any) {
    this.router.navigate(['../','saveDetails', this.timings[+id]]);
  }

}
