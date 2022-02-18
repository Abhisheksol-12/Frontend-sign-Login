import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskDashboardComponent } from './create-task-dashboard/create-task-dashboard.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';


const routes: Routes = [

 { path:'signup', component:SignupComponent},
 { path:'', redirectTo: '/dashboard' , pathMatch:'full'},
 { path:'login', component:LoginComponent},
 { path:'dashboard', component:DashboardComponent},
 { path:'create-task-dashboard', component:CreateTaskDashboardComponent},
 { path:'aboutpage', component:AboutpageComponent},
 { path:'view-task', component:ViewTaskComponent},
 { path:'view-meeting', component:ViewMeetingComponent},

 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
