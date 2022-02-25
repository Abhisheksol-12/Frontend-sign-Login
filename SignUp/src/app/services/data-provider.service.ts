import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  selectedUser:number[]=[];
  constructor() { }

  setUsers(arr:number[]){
    this.selectedUser = arr;
  }
  getUsers(){
    return this.selectedUser;
  }

}
