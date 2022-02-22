import { Component,EventEmitter, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
  dummy = 0;
  textChanged = new EventEmitter<string>();
  filterTextLeft: string = "";
  filterTextRight: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  
  onTextChangedLeft() {
    this.textChanged.emit(this.filterTextLeft);
  }
  onTextChangedRight() {
    this.textChanged.emit(this.filterTextRight);
  }

  //implementation for for add people
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep','Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  done:string[] = [];

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
