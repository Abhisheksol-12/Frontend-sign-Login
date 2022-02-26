import { Component, OnInit } from '@angular/core';
import {GetTasksService} from '../services/get-tasks.service'
import{tasks} from '../models/tasks'
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  http!: HttpClient;
  //tasks:any;
  constructor(private Task:GetTasksService) {}
  listTasks: tasks[] = [];; 
  userid:any;

  getId(){

  }

  // getdata(){
  //   this.http.get<any>('http://localhost:8080/api/task?userId=3&taskId=5').subscribe(response =>{
  //     console.log(response);

  //   })
  // }

  getTasks(){
    this.Task.getTask(4).subscribe(data=>{
      //console.warn("data",data);
      this.listTasks=data; 
    });
  }
  ngOnInit(): void {
    this.getTasks();
  }
  
}
