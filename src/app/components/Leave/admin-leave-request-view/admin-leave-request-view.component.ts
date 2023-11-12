import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveRequest } from 'src/app/Model/LeaveRequest';
import { ViewLeaveRequestService } from 'src/app/Services/view-leave-request.service';

@Component({
  selector: 'app-admin-leave-request-view',
  templateUrl: './admin-leave-request-view.component.html',
  styleUrls: ['./admin-leave-request-view.component.css']
})
export class AdminLeaveRequestViewComponent {

  leaverequest : LeaveRequest[] = [{

    leaveId: 0,
    employeeId : 0,
    projectCode: 0,
    employeeName: "",
    startDate: "",
    endDate: "",
    leaveDescription: "",
    leaveStatus: ""
  }];

  constructor(private leavereuestservice: ViewLeaveRequestService,private router:Router){}

  ngOnInit(): void {

    this.leavereuestservice.getAll().subscribe({
      next:(res)=>{
        this.leaverequest=res;
      }
    })
    
  }

}
