import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { CreateTaskDashboardComponent } from './create-task-dashboard/create-task-dashboard.component'
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPeoplePipe } from './Pipes/filter-people.pipe';
import { AddPeopleComponent } from './add-people/add-people.component';
import { CreateMeetingDashboardComponent } from './create-meeting-dashboard/create-meeting-dashboard.component';
//import { AuthInterceptor } from './services/auth.interceptor';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatemeetingComponent } from './createmeeting/createmeeting.component';










@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    CreateTaskDashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    AboutpageComponent,
    ViewMeetingComponent,
    ShowTaskComponent,
    UpdateTaskComponent,
    FilterPeoplePipe,
    AddPeopleComponent,
    CreateMeetingDashboardComponent,
    
    AboutpageComponent,
    ViewMeetingComponent,
    CreatemeetingComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    
    MatDividerModule,
    ScrollingModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    
    HttpClientModule
  
    
  ],
  

  providers: [],//[[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
