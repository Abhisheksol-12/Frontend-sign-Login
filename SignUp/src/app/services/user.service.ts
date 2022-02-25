import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:8080/api";
  JWT_TOKEN:string = 'Bearer ' + this.loginService.getToken();
 

  constructor(private http:HttpClient,private loginService : LoginService) { }

  //call the server to generate tokens

  saveUser(user:any){
    //const postData = JSON.stringify(user);
    return this.http.post(`${this.url}/users/save`,user);
    //{headers: new HttpHeaders({'Content-Type' : 'application/json; charset=UTF-8'})});
  }
  getUser(username:string){
    const params = new HttpParams().set('username',username);
    
    const reqHeader = new HttpHeaders().set('taken', this.JWT_TOKEN);

    return this.http.get(`${this.url}/users/`,{params});
  }
}
