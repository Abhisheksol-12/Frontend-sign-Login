import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';
import { UserToMeeting } from '../models/UserToMeeting';


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
  updateMeetingStatus(status:UserToMeeting){
    this.meetingService.updateMeetingStatus(status).subscribe(
      (response)=>{
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }
  acceptMeeting(meetingId:number,creator:number)
  {
    let userStatus =new UserToMeeting();
    userStatus.status='Accept';
    userStatus.meetingId=meetingId;
    userStatus.userId=creator;
    this.meetingService.updateMeetingStatus(userStatus).subscribe(
      (response)=>{
        console.log(response);
        console.log("user status succes==>");
      },(error) =>{
        console.log(error);
        console.log("user status error==>")
      }
    );
 }

 

}
