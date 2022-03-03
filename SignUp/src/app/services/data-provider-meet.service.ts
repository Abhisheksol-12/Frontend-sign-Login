import { Injectable } from '@angular/core';
import { AllMeetings, assigned, created } from '../models/AllMeeting';

@Injectable({
  providedIn: 'root'
})
export class DataProviderMeetService {

  constructor() { }

  
private created_meet:any;
private assigned_meet:any;

setDataForCreatedMeet(created_meet:created){
  this.created_meet = created_meet;
}
getDataForCreatedMeet(){
  return this.created_meet;
}

}
