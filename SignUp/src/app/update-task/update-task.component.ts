import { Component, OnInit } from '@angular/core';
import { created } from '../models/AllTask';
import { DataProviderService } from '../services/data-provider.service';


declare var window:any;

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  sideBarOpen: any;
  alert:boolean=false;


  constructor(private dataProvider:DataProviderService) { }
  formModal:any;
  created_task = new created();

  task_title:any;
  description:any;
  start_date:any;
  start_time:any;
  due_date:any;
  due_time:any;

  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModal1")
    );

    this.created_task = this.dataProvider.getDataForCreatedTask();
    console.log("created  == "+this.created_task.taskid);
    this.task_title=this.created_task.title;
    this.description=this.created_task.description;
    this.start_time=this.created_task.creationTime;
    this.start_date=this.created_task.creationTime;
    this.due_date=this.created_task.deadline;
    this.due_time=this.created_task.deadline;
  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.closeModal();
  }

  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }
  
  updateDetails(){
    this.created_task.title = this.task_title;
    this.created_task.description = this.description;
    this.created_task.creationTime = this.start_time;
    this.created_task.creationTime = this.start_date;
    this.created_task.deadline = this.due_time;
    this.created_task.deadline = this.due_date;
    console.log(this.created_task);
    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }




 

}
