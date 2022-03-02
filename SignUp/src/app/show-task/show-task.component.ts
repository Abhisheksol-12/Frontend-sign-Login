import { Component, OnInit } from '@angular/core';
import { created } from '../models/AllTask';
import { DataProviderService } from '../services/data-provider.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  task = new created();
  sideBarOpen: any;

  constructor(private dataProvider : DataProviderService) { } 

  ngOnInit(): void {
    this.task = this.dataProvider.getDataForShowTask();
  }
  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }
}
