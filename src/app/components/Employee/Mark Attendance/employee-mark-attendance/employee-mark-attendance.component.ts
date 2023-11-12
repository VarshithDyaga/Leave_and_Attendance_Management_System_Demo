import { Component } from '@angular/core';
import { Attendance } from 'src/app/Model/Attendence';

@Component({
  selector: 'app-employee-mark-attendance',
  templateUrl: './employee-mark-attendance.component.html',
  styleUrls: ['./employee-mark-attendance.component.css']
})
export class EmployeeMarkAttendanceComponent {

  markattendence:Attendance={
    attendenceId:0,
    employeeId: 0,
    projectCode: 0,
    employeename: '',
    date: '',
    presenceStatus:'',
    approvalStatus:''
  
  
  }




  today: string = new Date ().toISOString().split('T')[0];
}
