import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { LoginService } from './login.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { People } from '../models/People';
import { AddTask } from '../models/AddTask';
import { UserNameId } from '../models/userNameId';
import { AddMeeting } from '../models/AddMeeting';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8080/api";
  
  constructor(private http:HttpClient,private loginService : LoginService) { }

  //call the server to generate tokens

  saveUser(user:any){
    //const postData = JSON.stringify(user);
    return this.http.post(`${this.url}/users/save`,user);
    //{headers: new HttpHeaders({'Content-Type' : 'application/json; charset=UTF-8'})});
  }
  
  getUser(username:any,JWT_TOKEN:string){
    const params = new HttpParams().set('username',username);
    const reqHeader = new HttpHeaders().set('Authorization',JWT_TOKEN);

    return this.http.get<People[]>(`${this.url}/users`,{params,headers:reqHeader});
  }

  saveTask(task:AddTask){
    const jwt = sessionStorage.getItem('token');
    const reqHeader = new HttpHeaders().set('Authorization','Bearer '+jwt);
    return this.http.post(`${this.url}/task`,task,{headers:reqHeader});
  }

  saveMeeting(task:AddMeeting){
    const jwt = sessionStorage.getItem('token');
    const reqHeader = new HttpHeaders().set('Authorization','Bearer '+jwt);
    return this.http.post(`${this.url}/meeting`,task,{headers:reqHeader});
  }

  getId(username:any,JWT_TOKEN:string){
    const params = new HttpParams().set('username',username);
    const reqHeader = new HttpHeaders().set('Authorization',JWT_TOKEN);

    return this.http.get<UserNameId>(`${this.url}/user`,{params,headers:reqHeader});
  }
}
