import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;
  
  credentials={
    username:'',
    password:'',
  }

  constructor(private loginService : LoginService){}

  ngOnInit(): void {
  }

  onSubmit(){
    
    if(this.credentials.username=='' || this.credentials.password=='' 
    || this.credentials.username==null || this.credentials.password==null  ){

        console.log("Fields are empty");

    }else{
      //get token against the credentials username
      console.log("form is submitting");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response); //response.token;
          //this.loginService.loginUser(response.token)
          //window.location.href="/dashboard"
          
        },error=>{
          //error
          console.log(error);
        }
      )

      
    }
  }

}
