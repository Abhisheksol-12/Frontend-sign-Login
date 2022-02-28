import { Injectable } from '@angular/core';
import { assigned, created } from '../models/AllTask';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private selectedUser:number[]=[];
  private created_task:any;
  private assigned_task:any;
  

  constructor() { }

  setUsers(arr:number[]){
    this.selectedUser = arr;
  }
  getUsers(){
    return this.selectedUser;
  }

  setDataForCreatedTask(created_task:created){
    this.created_task = created_task;
  }
  getDataForCreatedTask(){
    return this.created_task;
  }
  setDataForAssignedTask(assigned_task:assigned){
    this.assigned_task = assigned_task;
  }
  getDataForAssignedTask(){
    return this.assigned_task;
  }


}
