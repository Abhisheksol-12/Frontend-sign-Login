import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.css']
})
export class ViewMeetingComponent implements OnInit {

  sideBarOpen: any;

  constructor(private meetingService:MeetingService) { }

  ngOnInit(): void {
    this.getAllMeetings();
  }
  getAllMeetings(){
    this.meetingService.getAllMeeting().subscribe(
      (response)=>{
        console.log(response);
      },(error)=>{
        console.log(error);
      }
    )
  }

  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }


}
