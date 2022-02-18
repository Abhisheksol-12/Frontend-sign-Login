import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskDashboardComponent } from './create-task-dashboard/create-task-dashboard.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';


const routes: Routes = [

 { path:'signup', component:SignupComponent},
 { path:'', redirectTo: '/dashboard' , pathMatch:'full'},
 { path:'login', component:LoginComponent},
 { path:'dashboard', component:DashboardComponent},
 { path:'create-task-dashboard', component:CreateTaskDashboardComponent},
 { path:'aboutpage', component:AboutpageComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
