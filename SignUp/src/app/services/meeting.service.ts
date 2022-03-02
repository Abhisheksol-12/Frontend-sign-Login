import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddMeeting } from '../models/AddMeeting';
import { AllMeetings } from '../models/AllMeeting';
import { DeleteMeetingRequest } from '../models/DeleteMeetingRequest';
import { DeleteUserFromMeeting } from '../models/DeleteUserFromMeeting';
import { UserNameId } from '../models/userNameId';
import { UserToMeeting } from '../models/UserToMeeting';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
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

  saveMeeting(task:AddMeeting){
    const jwt = sessionStorage.getItem('token');
    const reqHeader = new HttpHeaders().set('Authorization','Bearer '+jwt);
    return this.http.post(`${this.url}/meeting`,task,{headers:reqHeader});
  }
/////////////////
  getCreatedMeeting(){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.get<UserNameId>(`${this.url}/meeting/creator`,{params,headers:reqHeader});
  }
  getNotInvited(meetingId:number){
    const params = new HttpParams().set('userid',this.userid).set('taskId',meetingId);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.get<UserNameId>(`${this.url}/meeting/noninvited`,{params,headers:reqHeader});
    
  }
  getAllMeeting(){ 
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.get<AllMeetings>(`${this.url}/meeting/user`,{params,headers:reqHeader});
  }
  updateMeeting(meeting:AddMeeting){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.put(`${this.url}/meeting`,meeting,{params,headers:reqHeader});

  }
  updateMeetingStatus(status:UserToMeeting){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.put(`${this.url}/meeting/status`,status,{params,headers:reqHeader});

  }
  removeUser(user:DeleteUserFromMeeting){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    const options = {
      headers: reqHeader,
      params:params,
      body: user,
    };

    return this.http.delete(`${this.url}/meeting/user`,options);
  }

  removeMeeting(meeting:DeleteMeetingRequest){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    const options = {
      headers: reqHeader,
      params:params,
      body: meeting,
    };
    return this.http.delete(`${this.url}/meeting`,options);
  }
  addUserToMeeting(user:UserToMeeting){
    const params = new HttpParams().set('userid',this.userid);
    const reqHeader = new HttpHeaders().set('Authorization',this.JWT_TOKEN);

    return this.http.post(`${this.url}/meeting/adduser`,user,{params,headers:reqHeader});
  }

}
