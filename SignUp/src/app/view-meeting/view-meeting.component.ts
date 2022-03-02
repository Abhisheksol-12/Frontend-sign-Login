import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';
import { UserToMeeting } from '../models/UserToMeeting';
import { AllMeetings, assigned, created } from '../models/AllMeeting';


@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.css']
})
export class ViewMeetingComponent implements OnInit {

  sideBarOpen: any;

  //listTasks: tasks[] = [];
  assigned_meet:assigned[]=[];
  created_meet:created[]=[];
  userid:any;
  allMeeting!: AllMeetings;

  constructor(private meetingService:MeetingService) { }

  ngOnInit(): void {
    this.getAllMeetings();
  }
  getAllMeetings(){
    this.meetingService.getAllMeeting().subscribe(
      (response)=>{
        console.log("+++++");
        console.log(response);
        this.allMeeting = response;
        this.created_meet = this.allMeeting.created;
        this.assigned_meet = this.allMeeting.assigned;
        // console.log(this.allMeeting);
        // console.log(this.created_meet);
        // console.log(this.assigned_meet);
        // console.log("+++++++");
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
  acceptStatus(userId:number,meetId:number){
    // userId:any;
    // meetingId:any;
    // status:any;
    let status = new UserToMeeting();
    status.meetingId = meetId;
    status.userId = userId;
    status.status = "Accepted"

    this.meetingService.updateMeetingStatus(status).subscribe(
      (response)=>{
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }
  declineStatus(userId:number,meetId:number){
    let status = new UserToMeeting();
    status.meetingId = meetId;
    status.userId = userId;
    status.status = "Declined"
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
