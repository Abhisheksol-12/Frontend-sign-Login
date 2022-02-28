import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  sideBarOpen: any;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }

  

}
