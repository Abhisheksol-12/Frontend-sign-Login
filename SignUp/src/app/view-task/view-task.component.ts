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

  task=new AddTask();
  tempTask(){
    this.task.id = 17;
    this.task.title='my task new';
    this.task.creator=3;
    this.task.creationTime='2022-02-25 00:00'
    this.task.deadline='2022-03-25 11:11'
    this.task.description='do it in one month';
  }

  userAdd = new UserToTask();
  tempUserAdd(){
    this.userAdd.status='completed';
    this.userAdd.taskId=13;
    this.userAdd.userId=3;
  }

  userdel = new DeleteUserFromTask();
  tempUserDel(){
    this.userdel.taskId=17;
    this.userdel.userToBeDeleted=12;
  }

  taskDel = new DeleteTaskRequest();
  tempTaskDel(){
    this.taskDel.taskId=13;
    this.taskDel.creatorId=3;
  }

  constructor(private taskService:GetTasksService,private dataProvider : DataProviderService) {}
  listTasks: tasks[] = [];
  assigned_task:assigned[]=[];
  created_task:created[]=[];
  userid:any;
  allTask!: AllTask;

  ngOnInit(): void {
    //this.getTasks();
    this.getAllTasks();
    //this.getNotInvited();

     this.tempTask();
    // this.updateTask(this.task);

     this.tempUserAdd();
     this.addUserToTask(this.userAdd);
    this.updateTaskStatus(this.userAdd); //not working


    this.tempUserDel();
    //this.removeUser(this.userdel);

    this.tempTaskDel();
    //this.removeTask(this.taskDel);

  }
  getNotInvited(){
    this.taskService.getNotInvited(16).subscribe(
      (response)=>{
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
  updateTask(task:AddTask){
    this.taskService.updateTask(task).subscribe(
      (response)=>{
        console.log(response);
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
  addUserToTask(user:UserToTask){
    this.taskService.addUserToTask(user).subscribe(
      (response)=>{
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }
  removeUser(user:DeleteUserFromTask){
    this.taskService.removeUser(user).subscribe(
      (response)=>{
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }
  removeTask(task:DeleteTaskRequest){
    this.taskService.removeTask(task).subscribe(
      (response)=>{
        console.log(response);
      },(error) =>{
        console.log(error);
      }
    );
  }
  moveDataForCreatedTask(created_task:created){
    console.log("edit click "+created_task.taskid);
    this.dataProvider.setDataForCreatedTask(created_task);
  }
}
