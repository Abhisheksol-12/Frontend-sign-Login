import { Injectable } from '@angular/core';
import { assigned, created } from '../models/AllTask';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private selectedUser:number[]=[];

  private selectedList: People[] = [];
  private availableList: People[] = [];
  private AllUserList: People[] = [];

  private addUser:any[]=[];
  private delUser:any[]=[];

  private created_task:any;
  private assigned_task:any;

  private show_created_task:any;
  

  constructor() { }

  setDataForShowTask(task:created){
    this.show_created_task = task;
  }
  getDataForShowTask(){
    return this.show_created_task;
  }

  setAddUser(addUser:People[]){
    this.addUser = addUser;
  }
  getAddUser(){
    return this.addUser;
  }
  setDelUser(delUser:People[]){
    this.delUser = delUser;
  }
  getDelUser(){
    return this.delUser;
  }

  setUsers(arr:number[]){
    this.selectedUser = arr;
  }
  getUsers(){
    return this.selectedUser;
  }

  getSelectedList(){
    return this.selectedList;
  }
  setSelectedList(selected_user:People[]){
    this.selectedList=selected_user;
  }

  getAvailableList(){
    return this.availableList;
  }
  setAvailableList(available_user:People[]){
    this.availableList=available_user;
  }
  getAllList(){
    return this.AllUserList;
  }
  setAllList(All_user:People[]){
    this.AllUserList=All_user;
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
