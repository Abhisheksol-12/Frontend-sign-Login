import { Component, OnInit } from '@angular/core';
import { DataProviderMeetService } from '../services/data-provider-meet.service';
import { DataProviderService } from '../services/data-provider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideBarOpen: any;

  constructor(private dataProvider:DataProviderService) { }

  ngOnInit(): void {
  }

  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }

  fun()
  {
    alert("Thankyou for like..")
  }
  

}
