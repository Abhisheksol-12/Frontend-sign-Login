import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  credentials : Credentials = new Credentials();

  constructor(private loginService : LoginService,private userService : UserService,private router:Router){}

  ngOnInit(): void {
  }

  onSubmit(){
    
    if(this.credentials.username=='' || this.credentials.password=='' 
    || this.credentials.username==null || this.credentials.password==null  ){

        console.log("Fields are empty");

    }else{
      //get token against the credentials username
     // console.log("form is submitting");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          this.loginService.loginUser(response.access_token,this.credentials.username);
          
          this.router.navigate(['dashboard']);
          
        },error=>{
          //error
          console.log(error);
        }
      )
      
    }
  }

}

