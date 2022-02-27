import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import{tasks} from '../models/tasks'
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { People } from '../models/People';
import { UserNameId } from '../models/userNameId';
import { AddTask } from '../models/AddTask';
import { UserService } from './user.service';
import { DeleteUserFromTask } from '../models/DeleteUserFromTask';
import { UserToTask } from '../models/UserToTask';
import { DeleteTaskRequest } from '../models/DeleteTaskRequest';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService implements OnInit {
   
  url="http://localhost:8080/api";
  username:any;
  userid:any
  JWT_TOKEN:any;
  userNameId:any;

  constructor(private http:HttpClient , private userService:UserService) { 
    this.username=sessionStorage.getItem('username');
    this.JWT_TOKEN='Bearer '+sessionStorage.getItem('token');
    this.getUserId();
    this.userid = sessionStorage.getItem('userid');
  }

  getUserId(){
    this.userService.getid(this.username,this.JWT_TOKEN).subscribe(
      (response)=>{
        this.userid = response.userid;
        sessionStorage.setItem('userid',this.userid);
      },(error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    
  }

  saveTask(task:AddTask){
    const jwt = sessionStorage.getItem('token');
    const reqHeader = new HttpHeaders().set('Authorization','Bearer '+jwt);
    return this.http.post(`${this.url}/task`,task,{headers:reqHeader});
  }
  
///task/creator/{userid}

  getCreatedTask(){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    // console.log("2 "+this.username+this.JWT_TOKEN+this.userid);
    // console.log('2===='+this.userid);
    // console.log(sessionStorage.getItem('userid'));

    return this.http.get<UserNameId>(`${this.url}/task/creator/`,{params,headers:reqHeader});
  }

  getNotInvited(taskId:number){
    const params = new HttpParams().set('userid',this.userid).set('taskId',taskId);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.get<UserNameId>(`${this.url}/task/noninvited/`,{params,headers:reqHeader});
    
  }

  getAlltask(){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.get<UserNameId>(`${this.url}/task/user/`,{params,headers:reqHeader});
  }
////
  updateTask(task:AddTask){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.put(`${this.url}/task`,task,{params,headers:reqHeader});

  }
  updateTaskStatus(status:UserToTask){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.put(`${this.url}/task/status`,status,{params,headers:reqHeader});

  }

  removeUser(user:DeleteUserFromTask){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    const options = {
      headers: reqHeader,
      params:params,
      body: user,
    };


    return this.http.delete(`${this.url}/task/user`,options);
  }

  removeTask(task:DeleteTaskRequest){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    const options = {
      headers: reqHeader,
      params:params,
      body: task,
    };
    return this.http.delete(`${this.url}/task`,options);
  }
  addUserToTask(user:UserToTask){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.post(`${this.url}/task/adduser`,user,{params,headers:reqHeader});
  }

  // saveTask(task:AddTask){
  //   const jwt = sessionStorage.getItem('token');
  //   const reqHeader = new HttpHeaders().set('Authorization','Bearer '+jwt);
  //   return this.http.post(`${this.url}/task`,task,{headers:reqHeader});
  // }


  // tasks():Observable<any>{
  //   return this.http.get('${this.url}/task/user/{userid}')
  // }

  // getTask(userid:any){
  //   const params1 = new HttpParams().set('id',userid);
  //   return this.http.get<any>(`${this.url}/task`,{params:params1});
  // }

  // getId(username:any){
  //   const params = new HttpParams().set('username',username);
    

  //   return this.http.get<UserNameId>(`${this.url}/user`,{params});
  // }
}
