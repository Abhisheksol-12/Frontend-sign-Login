import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddTask } from '../models/AddTask';
import { DatePipe } from '@angular/common'
import { DataProviderService } from '../services/data-provider.service';
import { UserService } from '../services/user.service';
import { UserNameId } from '../models/userNameId';


@Component({
  selector: 'app-create-task-dashboard',
  templateUrl: './create-task-dashboard.component.html',
  styleUrls: ['./create-task-dashboard.component.css']
})
export class CreateTaskDashboardComponent implements OnInit {

  alert:boolean=false;
  TaskFormGroup:any | FormGroup;
  constructor(private _formBuilder: FormBuilder,private datepipe: DatePipe,
    private dataProvider:DataProviderService,private userService:UserService) {}
  task = new AddTask();
    userNameId:any;
    sideBarOpen: any;


  ngOnInit() {
    this.TaskFormGroup = this._formBuilder.group({
      taskTitle:['',Validators.required],
      startDate:['',Validators.required],
      startTime:['',Validators.required],
      dueDate:['',Validators.required],
      dueTime:['',Validators.required],
      discription:['',Validators.required],
    })
  }

  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }

  
  username:any;
  tok:any;
  onCreateTask(){
    this.task.title = this.TaskFormGroup.controls['taskTitle'].value;
    this.task.description = this.TaskFormGroup.controls['discription'].value;

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
    this.task.deadline = this.convertDateIntoString(this.TaskFormGroup.controls['dueDate'].value) + 
                              " "+this.TaskFormGroup.controls['dueTime'].value;

    console.log(this.task);
  }

  convertDateIntoString(date : Date){
    return this.datepipe.transform(date, 'yyyy-MM-dd');
   }
   onSubmitTask(){
      this.task.taskAssignees = this.dataProvider.getUsers();
      console.log("============================");
      console.log(this.task);
      this.alert=true;

      this.userService.saveTask(this.task).subscribe(
        (response)=>{
          console.log(response);
          
        },(error)=>{
          console.log(error);
        }
      )
      

      this.task = new AddTask();
   }

   sub()
   {
     alert("your task has been created")
   }
   closeAlert(){
     this.alert=false;
   }
  
}


