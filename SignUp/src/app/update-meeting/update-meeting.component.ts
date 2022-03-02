import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataProviderMeetService } from '../services/data-provider-meet.service';
import { created } from '../models/AllMeeting';
import { AddMeeting } from '../models/AddMeeting';
import { MeetingService } from '../services/meeting.service';
declare var window:any;

@Component({ 
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {
  sideBarOpen:any;
  constructor(private datepipe: DatePipe,private dataProviderMeet:DataProviderMeetService,
    private meetService:MeetingService) { }

  formModal:any;

  created_meet = new created();

  meet_purpose:any;
  description:any;
  creation_date:any;
  creation_time:any;
  meet_date:any;
  meet_time:any;

  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModal1")
    );


    this.created_meet = this.dataProviderMeet.getDataForCreatedMeet();
    this.meet_purpose=this.created_meet.purpose;
    this.description=this.created_meet.description;

    this.creation_time=this.datepipe.transform(this.created_meet.creationTime,'HH:mm');
    this.creation_date=this.datepipe.transform(this.created_meet.creationTime,'yyyy-MM-dd');

    this.meet_time=this.datepipe.transform(this.created_meet.meetingTime,'HH:mm');
    this.meet_date=this.datepipe.transform(this.created_meet.meetingTime,'yyyy-MM-dd');
    console.log("/////////////////");
    console.log(this.created_meet);

  }
  updateDetails(){
    this.created_meet.purpose = this.meet_purpose;
    this.created_meet.description = this.description;
    
    let meet = new AddMeeting();
    this.getMeetForUpdate(meet,this.created_meet);

    this.meetService.updateMeeting(meet).subscribe(
      (response)=>{
        console.log("update succes ==>")
        console.log(this.created_meet);
        console.log(meet);
        console.log(response);
      },(error)=>{
        console.log(error);
        console.log("update error ==>")
        console.log(this.created_meet);
        console.log(meet);
      }
    )
  }
  getMeetForUpdate(meet:AddMeeting,create_meet:created){
    meet.id = create_meet.meetingid;
    meet.purpose = create_meet.purpose;
    meet.description = create_meet.description;
    meet.creationTime = this.datepipe.transform(this.creation_date,'yyyy-MM-dd') + ' '+this.creation_time;
    meet.meetingTime = this.datepipe.transform(this.meet_date,'yyyy-MM-dd') + ' '+this.meet_time;
    meet.creator = create_meet.creator;

  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.closeModal();
  }

  sideBarToggler(){
    this.sideBarOpen =!this.sideBarOpen;
  }

}
