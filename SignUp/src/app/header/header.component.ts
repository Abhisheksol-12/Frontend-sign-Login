import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit(): void {
  }

  togglesSidebar()
  {
    this.toggleSidebarForMe.emit();

  }

  onSubmit(){
    console.log("working");
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  

}
