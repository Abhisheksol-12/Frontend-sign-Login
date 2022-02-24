import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
   
  url="http://localhost:8080/api";
  constructor(private http:HttpClient) { }
  tasks(){
    return this.http.get('${this.url}/task/user/{userid}')
  }
}
