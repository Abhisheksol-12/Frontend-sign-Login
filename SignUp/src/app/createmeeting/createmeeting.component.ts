import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-createmeeting',
  templateUrl: './createmeeting.component.html',
  styleUrls: ['./createmeeting.component.css']
})
export class CreatemeetingComponent implements OnInit {

  TaskFormGroup:any | FormGroup;
  addPropleFormGroup:any | FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

 
  ngOnInit() {
    this.TaskFormGroup = this._formBuilder.group({
      taskTitle:['',Validators.required]
    })
    this.TaskFormGroup = this._formBuilder.group({
      instructions:['',Validators.required]
    })
    this.TaskFormGroup = this._formBuilder.group({
      startDate:['',Validators.required]
    })
    this.TaskFormGroup = this._formBuilder.group({
      startTime:['',Validators.required]
    })
    this.TaskFormGroup = this._formBuilder.group({
      dueDate:['',Validators.required]
    })
    this.TaskFormGroup = this._formBuilder.group({
      dueTime:['',Validators.required]
    })
    this.TaskFormGroup = this._formBuilder.group({
      discription:['',Validators.required]
    })
    
    this.addPropleFormGroup = this._formBuilder.group({
      people:['',Validators.required]
    })
  }


  //implementation for for add people
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
