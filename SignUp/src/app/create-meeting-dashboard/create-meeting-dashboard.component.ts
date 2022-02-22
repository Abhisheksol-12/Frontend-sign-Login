import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-meeting-dashboard',
  templateUrl: './create-meeting-dashboard.component.html',
  styleUrls: ['./create-meeting-dashboard.component.css']
})
export class CreateMeetingDashboardComponent implements OnInit {

  TaskFormGroup:any | FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.TaskFormGroup = this._formBuilder.group({
      taskTitle:['',Validators.required],
      purpose:['',],
      place:['',],
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
