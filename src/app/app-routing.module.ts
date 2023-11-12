import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './components/Admin/adminlogin/adminlogin.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { EmployeeloginComponent } from './components/Employee/employeelogin/employeelogin.component';
import { EmployeeRegistrationComponent } from './components/Employee/employee-registration/employee-registration.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './components/Manager/manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './components/Employee/employee-dashboard/employee-dashboard.component';
import { EmployeeInformationComponent } from './components/Employee/employee-information/employee-information.component';
import { ProjectInformationComponent } from './components/Project/project-information/project-information.component';
import { AddNewProjectComponent } from './components/Project/add-new-project/add-new-project.component';
import { ApplyLeaveRequestComponent } from './components/Leave/apply-leave-request/apply-leave-request.component';
import { ViewLeaveRequestComponent } from './components/Leave/view-leave-request/view-leave-request.component';
import { AdminLeaveRequestViewComponent } from './components/Leave/admin-leave-request-view/admin-leave-request-view.component';
import { EmployeeMarkAttendanceComponent } from './components/Employee/Mark Attendance/employee-mark-attendance/employee-mark-attendance.component';
const routes: Routes = [
  {
    path : '',
    component : LoginpageComponent
  },
{
  path : "admin",
  component : AdminloginComponent
},
{
  path:"employee",
  component:EmployeeloginComponent
},
{
  path : "EmpReg",
  component : EmployeeRegistrationComponent
},
{
  path : "submit",
  component : LoginpageComponent
},
{
  path : "dashboard",
  component : AdminDashboardComponent
},
{
  path : "managerDashboard",
  component : ManagerDashboardComponent
},
{
  path : "employeeDashboard",
  component : EmployeeDashboardComponent
},
{
  path : 'employeeInformation',
  component : EmployeeInformationComponent

},
{
  path : 'projectInformation',
  component : ProjectInformationComponent
},
{
  path : 'addNewProject',
  component : AddNewProjectComponent
},
{
  path : 'applyLeaves',
  component : ApplyLeaveRequestComponent
},
{
  path : 'leaveRequest',
  component : ViewLeaveRequestComponent
},
{
  path : 'viewLeaveRequest',
  component : AdminLeaveRequestViewComponent
},
{
  path:'employeeDashboard/employeemark',
  component:EmployeeMarkAttendanceComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
