import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/Model/Employee';
import { EmployeeLoginService } from 'src/app/Services/employee-login.service';

@Injectable()

export class DataSharingService
{
  public isUserLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})


export class EmployeeloginComponent  implements OnInit {

  employee:Employee = {
    userName : "",
    password : "",
    designation: ""
 
  };



  
  errMsg:string=''
  constructor(private employeeloginservice:EmployeeLoginService, private router:Router)
  {
    //this.admin= new Admin();
    
  }

  ngOnInit(): void {
    
  }
  UsernameRequired():boolean{
    return !this.employee.userName
  }
  PasswordRequired():boolean{
    return !this.employee.password
  }
  DesignationRequired():boolean{
      return !this.employee.designation
  }

  Validate()
  {
  
    this.employeeloginservice.Validate(this.employee).subscribe({
      next:res=>{
      console.log(res)  
    
        //this.router.navigateByUrl('EmpReg');

        if(this.employee.designation != 'manager')
        {
          this.router.navigateByUrl('employeeDashboard');

        }
        else 
        {
          this.router.navigateByUrl('managerDashboard');
        }
      },
    
       error:err=>{
        this.errMsg="invalid login id or password";
        alert("invalid login id or password")
      }})


    }

  



   

}
