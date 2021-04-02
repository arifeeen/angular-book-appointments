import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from '../date-service.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.css']
})
export class SaveDetailsComponent implements OnInit {
  user:User;
  timeSlot: string;
  constructor(private dateService: DateService, private route: ActivatedRoute,
    
    private router: Router) { }

  ngOnInit(): void {
    if (!this.dateService.validDate) {
      this.router.navigate(['../','book']);
    }

    this.route.paramMap.subscribe(params => {
      this.timeSlot = params.get('id');
      
    })



  }

}
