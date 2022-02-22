import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users:any;

  user={
    username:'',
    email:'',
    password:'',
  }
  repassword='';

  constructor(private loginService : LoginService){}

  ngOnInit(): void {
  }

  onSubmit(){
    
    if(this.user.username=='' || this.user.password=='' || this.user.email=='' ||
      this.repassword=='' || this.user.username==null || this.user.password==null ||
       this.user.email==null || this.repassword==null ){

        console.log("Fields are empty");

    }else if(this.user.password!=this.repassword){

      console.log("Passwords are not same");

    }else{
      //save the credentials into database

      console.log("form is submitting");
      console.log(this.user);
      this.loginService.saveUser(this.user).subscribe(
        response=>{
          //success
          console.log(response);
          
        },error=>{
          //error
          console.log(error);
        }
      )
    }
  }
}
