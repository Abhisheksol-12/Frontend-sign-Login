import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskDashboardComponent } from './create-task-dashboard/create-task-dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { CreateMeetingDashboardComponent } from './create-meeting-dashboard/create-meeting-dashboard.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
<<<<<<< HEAD
import { ShowTaskComponent } from './show-task/show-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
=======
import { CreatemeetingComponent } from './createmeeting/createmeeting.component';
>>>>>>> 2c51e302fc896ed2985aab5623167341bcb1b1e7


const routes: Routes = [

 { path:'signup', component:SignupComponent},
 { path:'', redirectTo: '/login' , pathMatch:'full'},
 { path:'login', component:LoginComponent},
 { path:'dashboard', component:DashboardComponent},//canActivate:[AuthGuard]
 { path:'create-task-dashboard', component:CreateTaskDashboardComponent},//canActivate:[AuthGuard]
 { path:'create-meeting-dashboard', component:CreateMeetingDashboardComponent},
  
 { path:'dashboard', component:DashboardComponent},
 { path:'create-task-dashboard', component:CreateTaskDashboardComponent},
 { path:'aboutpage', component:AboutpageComponent},
 { path:'view-task', component:ViewTaskComponent},
 { path:'view-meeting', component:ViewMeetingComponent},
<<<<<<< HEAD
 { path:'show-task', component:ShowTaskComponent},
 { path:'update-task', component:UpdateTaskComponent},



 

  
=======
 {path: 'createmeeting', component:CreatemeetingComponent },  
>>>>>>> 2c51e302fc896ed2985aab5623167341bcb1b1e7
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
