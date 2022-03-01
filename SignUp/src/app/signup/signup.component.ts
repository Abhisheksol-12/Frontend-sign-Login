import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = new User();
  repassword='';
  alert:boolean=false;

  constructor(private userService : UserService,private router:Router){}

  ngOnInit(): void {
  }

  onSubmit(){
    
    if(this.user.firstName=='' || this.user.password=='' || this.user.username=='' ||
      this.repassword=='' || this.user.firstName==null || this.user.password==null ||
       this.user.username==null || this.repassword==null ){

        console.log("Fields are empty");

    }else if(this.user.password!=this.repassword){

      console.log("Passwords are not same");

    }else{
      //save the credentials into database
      this.alert=true;
      console.log("form is submitting");
      this.userService.saveUser(this.user).subscribe(
        response=>{
          //success
          console.log(response);
          this.router.navigate(['login']);
          
        },error=>{
          //error
          console.log(error);
        }
      )
    }
  }
  closeAlert(){
    this.alert=false;
  }
}
