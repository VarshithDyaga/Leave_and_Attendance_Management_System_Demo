import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyLeaves } from 'src/app/Model/ApplyLeaves';
import { LeaveRequest } from 'src/app/Model/LeaveRequest';
import { ApplyLeavesService } from 'src/app/Services/apply-leaves.service';
import { ViewLeaveRequestService } from 'src/app/Services/view-leave-request.service';

@Component({
  selector: 'app-apply-leave-request',
  templateUrl: './apply-leave-request.component.html',
  styleUrls: ['./apply-leave-request.component.css']
})
export class ApplyLeaveRequestComponent {
  
  leaverequest : LeaveRequest = {

    leaveId: 0,
    employeeId : 0,
    projectCode: 0,
   
    employeeName: "",
    startDate: "",
    endDate: "",
    leaveDescription: "",
    leaveStatus: ""
  };

 
  applyleaves : ApplyLeaves =
  {
    leaveId: 0 ,
    employeeId : 0,
    projectCode: 0,
    employeeName : '',
   
    startDate: '',
    endDate: '',
    leaveDescription: '',
    leaveStatus: 'pending'
  }; 




  errMsg:string=''

  constructor( private  applyleavesservice :  ApplyLeavesService ,private router:Router)
  {

  }

  ngOnInit(): void {
  }
  Validate()
    {
      
      
      this.applyleavesservice.Validate(this.applyleaves).subscribe({
        next:res=>{
        console.log(res)  
      
          this.router.navigateByUrl('dashboard');
        },
      
         error:err=>{
          this.errMsg="Please fill all details!";
          alert("Please fill all details!")
        }})
      }

      ValidateID(){
        return !this.applyleaves.employeeId
      }


}
