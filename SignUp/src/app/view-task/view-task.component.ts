import { Component, OnInit } from '@angular/core';
import {GetTasksService} from '../services/get-tasks.service'
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  tasks:any;
  constructor(private getTask:GetTasksService) {}
  
  getTasks(){
    this.getTask.tasks().subscribe((data: any)=>{
      console.warn("data",data);
      this.tasks=data
    });
  }
  ngOnInit(): void {
  }
  
}
