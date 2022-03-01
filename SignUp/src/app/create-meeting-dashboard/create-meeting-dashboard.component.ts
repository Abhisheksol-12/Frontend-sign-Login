import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddTask } from '../models/AddTask';
import { DatePipe } from '@angular/common'
import { DataProviderService } from '../services/data-provider.service';
import { UserService } from '../services/user.service';
import { UserNameId } from '../models/userNameId';
import { AddMeeting } from '../models/AddMeeting';

@Component({
  selector: 'app-create-meeting-dashboard',
  templateUrl: './create-meeting-dashboard.component.html',
  styleUrls: ['./create-meeting-dashboard.component.css']
})
export class CreateMeetingDashboardComponent implements OnInit {
  alert:boolean=false;

  sideBarOpen: any;

  TaskFormGroup:any | FormGroup;
  constructor(private _formBuilder: FormBuilder,private datepipe: DatePipe,
    private dataProvider:DataProviderService,private userService:UserService) {}
  task = new AddMeeting();
    userNameId:any;

  ngOnInit() {
    this.TaskFormGroup = this._formBuilder.group({
      taskTitle:['',Validators.required],//
      place:['',],
      startDate:['',Validators.required],
      startTime:['',Validators.required],
      dueDate:['',Validators.required],
      dueTime:['',Validators.required],
      discription:['',Validators.required],//

    })
  }

  // onCreate(){
  //   console.log(this.TaskFormGroup.value);
  //   const tasktit = this.TaskFormGroup.controls['taskTitle'].value;
  //   console.log(tasktit);
  // }

  username:any;
  tok:any;
  onCreateMeeting(){
    this.task.purpose = this.TaskFormGroup.controls['taskTitle'].value;
    this.task.description = this.TaskFormGroup.controls['discription'].value;
    this.task.place = this.TaskFormGroup.controls['place'].value;

    this.username = sessionStorage.getItem('username');
    this.tok = 'Bearer '+ sessionStorage.getItem('token');

    this.userService.getId(this.username,this.tok).subscribe(
      (response)=>{
        console.log(response);
        this.userNameId = response;
        this.task.creator = this.userNameId.userid;
        console.log(this.userNameId);
      },(error)=>{
        console.log(error);
      }
    )

    this.task.creationTime = this.convertDateIntoString(this.TaskFormGroup.controls['startDate'].value) + 
                              " "+this.TaskFormGroup.controls['startTime'].value;
    this.task.meetingTime = this.convertDateIntoString(this.TaskFormGroup.controls['dueDate'].value) + 
                              " "+this.TaskFormGroup.controls['dueTime'].value;

    console.log(this.task);
  }

  convertDateIntoString(date : Date){
    return this.datepipe.transform(date, 'yyyy-MM-dd');
   }
   onSubmitTask(){
      this.task.meetingAttendees = this.dataProvider.getUsers();
      console.log("============================");
      console.log(this.task);
      this.alert=true;

      this.userService.saveMeeting(this.task).subscribe(
        (response)=>{
          console.log(response);
        },(error)=>{
          console.log(error);
        }
      )
      this.task = new AddMeeting();
   }
   closeAlert(){
     this.alert=false;
   }
  

   sideBarToggler()
   {
     this.sideBarOpen =!this.sideBarOpen;
   }

   sub()
   {
     alert("your meeting has been created")
   }

}
