import { Component, OnInit } from '@angular/core';
import {GetTasksService} from '../services/get-tasks.service'
import{tasks} from '../models/tasks'
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddTask } from '../models/AddTask';
import { UserToTask } from '../models/UserToTask';
import { DeleteUserFromTask } from '../models/DeleteUserFromTask';
import { DeleteTaskRequest } from '../models/DeleteTaskRequest';
import { AllTask, assigned, created } from '../models/AllTask';
import { DataProviderService } from '../services/data-provider.service';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  http!: HttpClient;
  sideBarOpen: any;

  listTasks: tasks[] = [];
  assigned_task:assigned[]=[];
  created_task:created[]=[];
  userid:any;
  allTask!: AllTask;

  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }


  userAdd = new UserToTask();
  tempUserAdd(){
    this.userAdd.status='completed';
    this.userAdd.taskId=13;
    this.userAdd.userId=3;
  }


  constructor(private taskService:GetTasksService,private dataProvider : DataProviderService) {}
 

  ngOnInit(): void {
    //this.getTasks();
    this.getAllTasks();
    //this.getNotInvited();

     this.tempUserAdd();
    //this.updateTaskStatus(this.userAdd); //not working

  }
  getNotInvited(){
    this.taskService.getNotInvited(17).subscribe(
      (response)=>{
        console.log("non-invitee ==> ");
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }
  getTasks(){
    this.taskService.getCreatedTask().subscribe(
      (response)=>{
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }
  getAllTasks(){
    this.taskService.getAlltask().subscribe(
      (response)=>{
        console.log(response);
        this.allTask = response;
        console.log(this.allTask);
        console.log(this.allTask.assigned[0]);
        console.log(this.allTask.created[1]);
        this.assigned_task=this.allTask.assigned;
        this.created_task=this.allTask.created;
        
      },(error) =>{
        console.log(error);
      }
    );
  }
  updateTaskStatus(status:UserToTask){
    
  
    this.taskService.updateTaskStatus(status).subscribe(
      (response)=>{
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }

  updateStatusComplete(taskid:number,creator:number){
    let userStatus = new UserToTask();
    userStatus.status='completed';
    userStatus.taskId=taskid;
    userStatus.userId=creator;
    this.taskService.updateTaskStatus(userStatus).subscribe(
      (response)=>{
        console.log(response);
        console.log("user status succes==>");
      },(error) =>{
        console.log(error);
        console.log("user status error==>")
      }
    );
  }
  updateStatusInProgress(taskid:number,creator:number){
    let userStatus = new UserToTask();
    userStatus.status='In Progress';
    userStatus.taskId=taskid;
    userStatus.userId=creator;
    this.taskService.updateTaskStatus(userStatus).subscribe(
      (response)=>{
        console.log(response);
        console.log("user status succes==>");
      },(error) =>{
        console.log(error);
        console.log("user status error==>")
      }
    );
  }

  deleteTask(taskid:number,creator:number){
    let taskToBeDeleted = new DeleteTaskRequest();
    taskToBeDeleted.taskId = taskid;
    taskToBeDeleted.creatorId = creator;
    this.taskService.removeTask(taskToBeDeleted).subscribe(
      (response)=>{
        console.log(response);
        
        console.log("deleted succesfull===>")
      },(error) =>{
        console.log("error in delete task ===>")
        console.log(error);

      }
    );
  }

  
  moveDataForCreatedTask(created_task:created){
    console.log("edit click "+created_task.taskid);
    this.dataProvider.setDataForCreatedTask(created_task);
  }
  moveDataForShow(show_created_task:created){
    console.log("edit click "+show_created_task.taskid);
    this.dataProvider.setDataForShowTask(show_created_task);
  }
}
