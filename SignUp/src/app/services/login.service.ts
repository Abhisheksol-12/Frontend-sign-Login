import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/api";
 

  constructor(private http:HttpClient) { }

  //call the server to generate tokens

  saveUser(user:any){
    return this.http.post(`${this.url}/users/save`,user);
  }

  generateToken(credentials: any){ 

    // const authCreds = {
    //   username : credentials.username,
    //   password : credentials.password
    // }


    console.log(credentials);
    return this.http.get(`${this.url}/login`,credentials);
  }





  //for login user
  loginUser(token:any){
    localStorage.setItem("token",token);
  }

  //to check is login/not
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  //for logout means remove token from local storage
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //get token from local storage
  getToken(){
    return localStorage.getItem("token");
  }

}
