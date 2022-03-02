import { Component, OnInit } from '@angular/core';
declare var window:any;

@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {
  sideBarOpen:any;
  constructor() { }

  formModal:any;
  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModal1")
    );
  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.closeModal();
  }

  sideBarToggler(){
    this.sideBarOpen =!this.sideBarOpen;
  }

}
