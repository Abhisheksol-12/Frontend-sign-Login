import { Component, OnInit } from '@angular/core';
import { created } from '../models/AllTask';
import { DatePipe } from '@angular/common'
import { DataProviderService } from '../services/data-provider.service';
import { People } from '../models/People';
import { GetTasksService } from '../services/get-tasks.service';
import { UserService } from '../services/user.service';
import { AddTask } from '../models/AddTask';
import { DeleteUserFromTask } from '../models/DeleteUserFromTask';
import { UserToTask } from '../models/UserToTask';


declare var window:any;

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private dataProvider:DataProviderService,private datepipe: DatePipe,
    private taskService:GetTasksService,private userService:UserService) { }
  sideBarOpen: any;
  alert:boolean=false;

  formModal:any;
  
  created_task = new created();

  task_title:any;
  description:any;
  start_date:any;
  start_time:any;
  due_date:any;
  due_time:any;

  
  leftUserList:any[]=[];
  rightUserList:any[]=[];
  AllUserList:any[]=[];

  addUser:any[]=[];
  delUser:any[]=[];

  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModal1")
    );

    this.created_task = this.dataProvider.getDataForCreatedTask();
    this.task_title=this.created_task.title;
    this.description=this.created_task.description;

    this.start_time=this.datepipe.transform(this.created_task.creationTime,'HH:mm');
    this.start_date=this.datepipe.transform(this.created_task.creationTime,'yyyy-MM-dd');

    
    this.due_time=this.datepipe.transform(this.created_task.deadline,'HH:mm');
    this.due_date=this.datepipe.transform(this.created_task.deadline,'yyyy-MM-dd');

    //get left list
    this.getNotInvited(this.created_task.taskid);
  
    //get All user list
    this.getAllUsers();

    
  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.closeModal();
  }


  doPrepareSelectedPeopleComponant(){
  }

  
  getAllUsers(){
    let uname = sessionStorage.getItem('username');
    let jwt = sessionStorage.getItem('token');
    this.userService.getUser(uname,'Bearer '+jwt).subscribe(
      (response)=>{
        //console.log("All user response (2)==>");
        this.AllUserList=response;
        this.dataProvider.setAllList(this.AllUserList);

        //console.log(this.AllUserList);
      },(error)=>{
        console.log(error);
      }
    );
  }
  getNotInvited(taskId:number){
    this.taskService.getNotInvited(taskId).subscribe(
      (response)=>{
        //console.log("non-invitee (1)==> ");
        this.leftUserList = response;
        //console.log(this.leftUserList);

        this.dataProvider.setSelectedList(this.leftUserList);
      },(error) =>{
        console.log(error);
      }
    );
  }

  //final update submission method;
  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }
  
  updateDetails(){
    this.created_task.title = this.task_title;
    this.created_task.description = this.description;
    
    let task = new AddTask();
    this.getTaskForUpdate(task,this.created_task);

    this.taskService.updateTask(task).subscribe(
      (response)=>{
        console.log("update succes ==>")
        console.log(this.created_task);
        console.log(task);
        console.log(response);
      },(error)=>{
        console.log(error);
        console.log("update error ==>")
        console.log(this.created_task);
        console.log(task);
      }
    )

  }
  finalizeUsers(){
    this.addUser = this.dataProvider.getAddUser();
    this.delUser = this.dataProvider.getDelUser();

    for(let i = 0;i<this.delUser.length;i++){
      let user = this.delUser[i];
      let del_user = new DeleteUserFromTask();
      del_user.taskId = this.created_task.taskid;
      del_user.userToBeDeleted = user.userId;
      this.taskService.removeUser(del_user).subscribe(
        (response)=>{
          console.log(response);
        },(error)=>{
          console.log(error);
        }
      )
    }

    for(let i = 0;i<this.addUser.length;i++){
      let user = this.addUser[i];
      let add_user = new UserToTask();
      add_user.taskId = this.created_task.taskid;
      add_user.userId = user.userId;
      add_user.status = this.created_task.status;
      this.taskService.addUserToTask(add_user).subscribe(
        (response)=>{
          console.log(response);
        },(error)=>{
          console.log(error);
        }
      )
    }
  }
  getTaskForUpdate(task:AddTask,created_task:created){
    task.id = created_task.taskid;
    task.title = created_task.title;
    task.description = created_task.description;
    task.creationTime = this.datepipe.transform(this.start_date,'yyyy-MM-dd') + ' '+this.start_time;
    task.deadline = this.datepipe.transform(this.due_date,'yyyy-MM-dd') + ' '+this.due_time;
    task.creator = created_task.creator;

    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }

  

}
