import { Component, OnInit, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { UserService } from '../services/user.service';
import { People } from '../models/People';
import { DataProviderService } from '../services/data-provider.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  sideBarOpen: any;
  isValid:any;

  dummy = 0;
  textChanged = new EventEmitter<string>();
  filterTextLeft: string = "";
  filterTextRight: string = "";

  username :any;
  tok:any;
  jwt:any;

  selectedList: People[] = [];
  availableList: People[] = [];
  allList:People[] = [];
  availableListPre:People[] = [];

  addUser:any[]=[];
  delUser:any[]=[];

  constructor(private userService:UserService,private dataProvider :DataProviderService) { }

  onTextChangedLeft() {
    this.textChanged.emit(this.filterTextLeft);
  }
  onTextChangedRight() {
    this.textChanged.emit(this.filterTextRight);
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.isValid = this.dataProvider.getRoute();;
    console.log("//////");
    console.log(this.isValid);
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

  getAllUsers(){
    this.selectedList = this.dataProvider.getSelectedList();
    this.allList = this.dataProvider.getAllList();
    this.getAvailableList(this.selectedList,this.allList);

    for(let i = 0;i<this.availableList.length;i++){
      this.availableListPre[i] = this.availableList[i];
    }
    this.dataProvider.setAvailableList(this.availableListPre);


    this.addId(this.selectedList,this.availableList);
    // console.log(this.selectedList);
    // console.log(this.availableList);
    // console.log(this.allList);
  }

  addId(arr1:People[],arr2:People[]){
    let id = 0;
    for (let i = 0; i < arr1.length ; i++) {
      let item = arr1[i];
      item.id = id;
      id++;
      //console.log(item);
    }
    for (let i = 0; i < arr2.length ; i++) {
      let item = arr2[i];
      item.id = id;
      id++;
    }
  }

  getAvailableList(arr1:People[],arr2:People[]){
    arr1.sort((a,b) => a.userId-b.userId);
    arr2.sort((a,b) => a.userId-b.userId);

    let i =0,j=0,k=0;
    while(i<arr1.length && j < arr2.length){
      if(arr1[i].userId!=arr2[j].userId){
        this.availableList[k]=arr2[j];
        j++;
        k++;
      }else{
        i++;
        j++;
      }
    }
    while(j < arr2.length){
      this.availableList[k]=arr2[j];
      k++,j++;
    }
  }

  //finalize method
  addPeople(){
    let cur = this.availableList;
    let pre = this.dataProvider.getAvailableList();
    let i =0,j=0;
    let del_index = 0;
    let add_index = 0;

    while(i<cur.length && j < pre.length){
      if(cur[i].userId < pre[j].userId){
        this.addUser[add_index++] = cur[i++];
      }else if(cur[i].userId > pre[j].userId){
        this.delUser[del_index++] = pre[j++];
      }else{
        i++,j++;
      }
    }

    while(i<cur.length){
      this.addUser[add_index++] = cur[i++];
    }

    while(j<pre.length){
      this.delUser[del_index++] = pre[j++];
    }

    this.dataProvider.setAddUser(this.addUser);
    this.dataProvider.setDelUser(this.delUser);
    // console.log("----------");
    // console.log(this.availableList);
    // console.log(this.dataProvider.getAvailableList());
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
