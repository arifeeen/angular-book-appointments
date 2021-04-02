import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DateService } from '../date-service.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.css']
})
export class SaveDetailsComponent implements OnInit {
  user: User;
  timeSlot: string;
  userForm: FormGroup;
  _id: string = '';

  loader = false;

  constructor(private dateService: DateService, private route: ActivatedRoute,

    private router: Router, private fb: FormBuilder,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    if (!this.dateService.validDate) {
      this.router.navigate(['../', 'book']);
    }


    this.route.paramMap.subscribe(params => {
      this.timeSlot = params.get('id');

    })

    
    const dataObj = this.dateService.appointmentsGlobal.filter(el => el.time === this.timeSlot)[0];
    if (this.dateService.appointmentsGlobal.length && dataObj) {
      
      console.log('dataObj', dataObj);
      this._id = dataObj._id;
      this.userForm = this.fb.group({
        firstName: [dataObj.firstName, Validators.required],
        lastName: [dataObj.lastName, Validators.required],
        contact: [dataObj.contact, Validators.required]
      })
    } else {
      this.userForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        contact: ['', Validators.required]
      })
    }



  }

  saveAppointment() {
    if (this.userForm.invalid) {
      alert('Please enter proper details');
      return;
    }
    const dataObj = this.userForm.value;
    dataObj["date"] = this.dateService.date;
    dataObj["time"] = this.timeSlot;
    if (this._id) {
      dataObj["_id"] = this._id;
      this._id = '';
      this.updateAppointment(dataObj);

      return;
    }
    this.dateService.appointmentsGlobal = [];
    this.spinner.show();
    this.dateService.saveAppointment(dataObj).subscribe(res => {
      this.spinner.hide();
      alert('Appointment saved successfully');
      this.dateService.date = '';
      this.dateService.validDate = false;
      this.router.navigate(['../', 'book']);
    }, err => {
      this.spinner.hide();
      alert('Appointment cannot be saved. Try again later.');
      this.dateService.date = '';
      this.dateService.validDate = false;
      this.router.navigate(['../', 'book']);

    })
  }

  updateAppointment(dataObj: User) {
    this.spinner.show();
    this.dateService.updateAppointment(dataObj).subscribe(res => {
      this.spinner.hide();
      alert('appointment updated successfully');
      this.dateService.date = '';
      this.dateService.validDate = false;
      this.router.navigate(['../', 'book']);
    }, err => {
      this.spinner.hide();
      alert('Appointment cannot be updated. Try again later.');
      this.dateService.date = '';
      this.dateService.validDate = false;
      this.router.navigate(['../', 'book']);
    })

  }

  returnAppointment() {
    this.dateService.date = '';
    this.dateService.validDate = false;
    this.dateService.appointmentsGlobal = [];
    this.router.navigate(['../', 'book']);
  }

}
