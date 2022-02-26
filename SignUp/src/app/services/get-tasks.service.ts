import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import{tasks} from '../models/tasks'
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { People } from '../models/People';
import { UserNameId } from '../models/userNameId';





@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
   
  url="http://localhost:8080/api";
  constructor(private http:HttpClient) { }
  tasks():Observable<any>{
    return this.http.get('${this.url}/task/user/{userid}')
  }

  getTask(userid:any){
    const params1 = new HttpParams().set('id',userid);
    return this.http.get<any>(`${this.url}/task`,{params:params1});


  }

  getId(username:any){
    const params = new HttpParams().set('username',username);
    

    return this.http.get<UserNameId>(`${this.url}/user`,{params});
  }
}
