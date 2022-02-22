import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskDashboardComponent } from './create-task-dashboard/create-task-dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { CreateMeetingDashboardComponent } from './create-meeting-dashboard/create-meeting-dashboard.component';


const routes: Routes = [

 { path:'signup', component:SignupComponent},
 { path:'', redirectTo: '/login' , pathMatch:'full'},
 { path:'login', component:LoginComponent},
 { path:'dashboard', component:DashboardComponent},//canActivate:[AuthGuard]
 { path:'create-task-dashboard', component:CreateTaskDashboardComponent},//canActivate:[AuthGuard]
 { path:'create-meeting-dashboard', component:CreateMeetingDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
