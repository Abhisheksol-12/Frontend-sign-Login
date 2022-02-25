import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private loginService : LoginService,private userService: UserService,private router : Router) { }

  ngOnInit(): void {
  }

  togglesSidebar()
  {
    this.toggleSidebarForMe.emit();
  }
  username :any;
  tok:any;
  jwt:any;

  onSubmit(){
    //console.log("working"+sessionStorage.getItem('token'));

    // this.username = sessionStorage.getItem('username');
    // this.tok = 'Bearer '+ sessionStorage.getItem('token');
    // console.log(this.username+this.tok);
    // this.userService.getUser(this.username,this.tok).subscribe(
    //   (res)=>{
    //     console.log(res);
    //   },err=>{
    //     console.log(err);
    //     //console.log(sessionStorage.getItem('token'));
    //   }
    // )
    
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  

}
