import { Component,EventEmitter, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { UserService } from '../services/user.service';
import { People } from '../models/People';
import { DataProviderService } from '../services/data-provider.service';
import { ToastServiceService } from '../services/toast-service.service'



@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
 

  sideBarOpen:any;

  dummy = 0;
  textChanged = new EventEmitter<string>();
  filterTextLeft: string = "";
  filterTextRight: string = "";

  username :any;
  tok:any;
  jwt:any;

  selectedList: People[] = [];
  availableList: any[] = [];

  constructor(private userService:UserService,private dataProvider :DataProviderService,public toastService: ToastServiceService) { }

  onTextChangedLeft() {
    this.textChanged.emit(this.filterTextLeft);
  }
  onTextChangedRight() {
    this.textChanged.emit(this.filterTextRight);
  }

  ngOnInit(): void {
    this.getAllUsersForCreate();
    //this.getAllUsersForCreateUpdateTask();
    //this.getAllUsersForCreateUpdateMeeting();

  }

  dropItem(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      let itemId = event.previousContainer.data[event.previousIndex].id;
      if (event.previousContainer.id == 'selectedList') {
        this.moveItem(this.selectedList, this.availableList, itemId);
      } else {
        this.moveItem(this.availableList, this.selectedList, itemId);
      }
      this.dummy++;
    }
  }

  moveItem(fromList: any[], toList: any[], itemId: any) {
    let item = fromList.find((x: { id: any; }) => x.id == itemId);
    let itemIndex = fromList.findIndex((x: any) => x == item);
    fromList.splice(itemIndex, 1);
    toList.push(item);
  }

  getAllUsersForCreate(){

    this.username = sessionStorage.getItem('username');
    this.tok = 'Bearer '+ sessionStorage.getItem('token');

    this.userService.getUser(this.username,this.tok).subscribe(
      (res)=>{
        this.selectedList = res;
        this.addId(this.selectedList);
        console.warn(this.selectedList);
      },err=>{
        console.log(err);
        //console.log(sessionStorage.getItem('token'));
      }
    )
  }
  getAllUsersForCreateUpdateTask(){
    
  }
  getAllUsersForCreateUpdateMeeting(){

  }

  addId(arr:People[]){
    for (let i = 0; i < arr.length ; i++) {
      let item = arr[i];
      item.id = i;
      console.log(item);
    }
  }


  addPeople(){
    let result=[];
    for(let i = 0;i<this.availableList.length;i++){
      let uid = this.availableList[i].userId;
      result[i] = uid;
    }
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
    console.log(result);
    this.dataProvider.setUsers(result);


  }

  selectAllPeople(){
    this.availableList=this.combineAll();
    this.selectedList=[];
  }
  clearAllPeople(){
    this.selectedList=this.combineAll();
    this.availableList=[];

  }
  combineAll(){
    let result=[];
    let j = 0;
    for(let i = 0;i<this.availableList.length;i++){
      result[j] = this.availableList[i];
      j++;
    }
    for(let i = 0;i<this.selectedList.length;i++){
      result[j] = this.selectedList[i];
      j++;
    }
    return result;
  }

  sideBarToggler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }


}

