import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveRequest } from 'src/app/Model/LeaveRequest';
import { ViewLeaveRequestService } from 'src/app/Services/view-leave-request.service';

@Component({
  selector: 'app-view-leave-request',
  templateUrl: './view-leave-request.component.html',
  styleUrls: ['./view-leave-request.component.css']
})
export class ViewLeaveRequestComponent implements OnInit {

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

  constructor(private leaverequestservice: ViewLeaveRequestService,private router:Router){}

  ngOnInit(): void {

    this.leaverequestservice.getAll().subscribe({
      next:(res)=>{
        this.leaverequest=res;
      }
    })
    
  }

  ApproveRequest(req : LeaveRequest, id : number)
  {

    if(req.leaveStatus == "pending")
    {
      
      this.leaverequestservice.UpdateLeaveRequest(req,id).subscribe({
        next:(res)=>{
          req.leaveStatus = "Approved";
          alert("Succesfully updated");
          
        }
      })

    }
    return req.leaveStatus , id;

  }

  RejectRequest(req : LeaveRequest, id : number  )
  {
   
    if(req.leaveStatus == "pending")
    {
  
      this.leaverequestservice.UpdateLeaveRequest(req,id).subscribe({
        next:(res)=>{
          req.leaveStatus = "Rejected";
          alert("Succesfully updated");         
        }
      })

    }
    return req.leaveStatus , id ;

  }


}
