import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/api";
 

  constructor(private http:HttpClient) { }

  generateToken(credentials: any){ 
    return this.http.post(`${this.url}/login`,credentials);
  }


  //for login user
  loginUser(token:any){
    sessionStorage.setItem("token",token);
  }

  //to check is login/not
  isLoggedIn(){
    let token = sessionStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  //for logout means remove token from local storage
  logout(){
    sessionStorage.removeItem("token");
    return true;
  }

  //get token from local storage
  getToken(){
    return sessionStorage.getItem("token");
  }

}
