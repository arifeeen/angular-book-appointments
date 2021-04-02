import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DateService } from '../date-service.service';
import { User } from '../model/user.model';

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
  appointments: User[] = [];

  loader = false;


  constructor(public dateService: DateService, private router: Router,
    private spinner: NgxSpinnerService) {
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
    this.spinner.show();
    this.dateService.getAppointments().subscribe(res => {
      this.appointments = res;
      this.dateService.appointmentsGlobal = [...this.appointments];
      this.spinner.hide();
      console.log('appointments array', this.appointments);
    }, err => {
      alert('Unable to fetch appointments. Please try again later.');
    })
  } 

  onSelectTime(id: any) {
    this.router.navigate(['../','saveDetails', this.timings[+id]]);
  }

  checkBooked(time: string) {
    let bool = false;
    this.appointments.forEach(el => {
      if (el["time"] == time) {
        
        bool = true;
      } 
    });
    
    return bool;
  }

}
