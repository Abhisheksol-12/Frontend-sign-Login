import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-task-dashboard',
  templateUrl: './create-task-dashboard.component.html',
  styleUrls: ['./create-task-dashboard.component.css']
})
export class CreateTaskDashboardComponent implements OnInit {

  TaskFormGroup:any | FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.TaskFormGroup = this._formBuilder.group({
      taskTitle:['',Validators.required],
      instructions:['',],
      startDate:['',Validators.required],
      startTime:['',Validators.required],
      dueDate:['',Validators.required],
      dueTime:['',Validators.required],
      discription:['',Validators.required],

    })
  }

  onCreate(){
    console.log(this.TaskFormGroup.value);
    const tasktit = this.TaskFormGroup.controls['taskTitle'].value;
    console.log(tasktit);
  }
  
}


