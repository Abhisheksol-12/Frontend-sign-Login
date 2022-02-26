import { Component, OnInit } from '@angular/core';
import {GetTasksService} from '../services/get-tasks.service'
import{tasks} from '../models/tasks'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  //tasks:any;
  constructor(private Task:GetTasksService) {}
  listTasks: tasks[] = [];; 
  userid:any;

  getId(){

  }



  getTasks(){
    this.Task.getTask(5).subscribe(data=>{
      //console.warn("data",data);
      this.listTasks=data; 
    });
  }
  ngOnInit(): void {
  }
  
}
