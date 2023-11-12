import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { AdminloginComponent } from './components/Admin/adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './components/Employee/employeelogin/employeelogin.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { EmployeeRegistrationComponent } from './components/Employee/employee-registration/employee-registration.component';
import { FormsModule } from '@angular/forms';
import { ManagerDashboardComponent } from './components/Manager//manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './components/Employee/employee-dashboard/employee-dashboard.component';
import { EmployeeInformationComponent } from './components/Employee/employee-information/employee-information.component';
import { ProjectInformationComponent } from './components/Project/project-information/project-information.component';
import { AddNewProjectComponent } from './components/Project/add-new-project/add-new-project.component';
import { ApplyLeaveRequestComponent } from './components/Leave/apply-leave-request/apply-leave-request.component';
import { ViewLeaveRequestComponent } from './components/Leave/view-leave-request/view-leave-request.component';
import { AdminLeaveRequestViewComponent } from './components/Leave/admin-leave-request-view/admin-leave-request-view.component';
import { SearchPipe } from './search.pipe';
import { EmployeeMarkAttendanceComponent } from './components/Employee/Mark Attendance/employee-mark-attendance/employee-mark-attendance.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    EmployeeloginComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    EmployeeRegistrationComponent,
    ManagerDashboardComponent,
    EmployeeDashboardComponent,
    EmployeeInformationComponent,
    ProjectInformationComponent,
    AddNewProjectComponent,
    ApplyLeaveRequestComponent,
    ViewLeaveRequestComponent,
    AdminLeaveRequestViewComponent,
    SearchPipe,
    EmployeeMarkAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


