import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataProviderMeetService } from '../services/data-provider-meet.service';
import { created } from '../models/AllMeeting';
import { AddMeeting } from '../models/AddMeeting';
import { MeetingService } from '../services/meeting.service';
import { UserService } from '../services/user.service';
import { DataProviderService } from '../services/data-provider.service';
import { DeleteUserFromMeeting } from '../models/DeleteUserFromMeeting';
import { UserToMeeting } from '../models/UserToMeeting';
import { Router } from '@angular/router';
declare var window:any;

@Component({ 
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {
  sideBarOpen:any;

  constructor(private datepipe: DatePipe,private dataProviderMeet:DataProviderMeetService,
    private meetService:MeetingService,private userService : UserService,private dataProvider:DataProviderService,
    private router:Router) { }

  formModal:any;

  created_meet = new created();

  meet_purpose:any;
  description:any;
  creation_date:any;
  creation_time:any;
  meet_date:any;
  meet_time:any;

  leftUserList:any[]=[];
 // rightUserList:any[]=[];
  AllUserList:any[]=[];

  addUser:any[]=[];
  delUser:any[]=[];

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

    //get left list
    this.getNotInvited(this.created_meet.meetingid);
  
    //get All user list
    this.getAllUsers();
  }
  moveToAddUser(){
    this.dataProvider.setRoute(false);
    this.router.navigate(['add-user']);
  }

  getAllUsers(){
    let uname = sessionStorage.getItem('username');
    let jwt = sessionStorage.getItem('token');
    this.userService.getUser(uname,'Bearer '+jwt).subscribe(
      (response)=>{
        //console.log("All user response (2)==>");
        this.AllUserList=response;
        this.dataProvider.setAllList(this.AllUserList);

        //console.log(this.AllUserList);
      },(error)=>{
        console.log(error);
      }
    );
  }
  getNotInvited(meetId:number){
    this.meetService.getNotInvited(meetId).subscribe(
      (response)=>{
        //console.log("non-invitee (1)==> ");
        this.leftUserList = response;
        //console.log(this.leftUserList);

        this.dataProvider.setSelectedList(this.leftUserList);
      },(error) =>{
        console.log(error);
      }
    );
  }

  finalizeUsers(){
    this.addUser = this.dataProvider.getAddUser();
    this.delUser = this.dataProvider.getDelUser();

    for(let i = 0;i<this.delUser.length;i++){
      let user = this.delUser[i];
      let del_user = new DeleteUserFromMeeting();
      del_user.meetingId = this.created_meet.meetingid;
      del_user.userToBeDeleted = user.userId;
      this.meetService.removeUser(del_user).subscribe(
        (response)=>{
          console.log(response);
        },(error)=>{
          console.log(error);
        }
      )
    }

    for(let i = 0;i<this.addUser.length;i++){
      let user = this.addUser[i];
      let add_user = new UserToMeeting();
      add_user.meetingId = this.created_meet.meetingid;
      add_user.userId = user.userId;
      add_user.status = 'Not responded';
      this.meetService.addUserToMeeting(add_user).subscribe(
        (response)=>{
          console.log(response);
        },(error)=>{
          console.log(error);
        }
      )
    }
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
