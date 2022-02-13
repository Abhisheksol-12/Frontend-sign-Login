import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewTaskComponent } from './view-task/view-task.component';


const routes: Routes = [

 { path:'signup', component:SignupComponent},
 { path:'', redirectTo: '/dashboard' , pathMatch:'full'},
 { path:'login', component:LoginComponent},
 { path:'dashboard', component:DashboardComponent},
 { path:'header', component:HeaderComponent},
 { path:'home', component:HomeComponent},
 { path:'sidenav', component:SidenavComponent},
 { path:'view-task',component:ViewTaskComponent}
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
