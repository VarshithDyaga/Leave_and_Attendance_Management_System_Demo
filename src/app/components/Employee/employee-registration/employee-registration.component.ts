import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmployeeRegistration } from 'src/app/Model/EmployeeRegistration';
import { EmployeeRegistrationService } from 'src/app/Services/employee-registration.service';


@Injectable()

export class DataSharingService
{
  public isUserLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  employeeregistration:EmployeeRegistration = {

    isEdit : false,
    employeeId : 0,
    userName: "",
    password: "",
    firstName: '',
    lastName: '',
    email: '',
    projectCode : 0,
    designation: ''
  }; 

  errMsg:string=''
  constructor(private employeeregistrationservice:EmployeeRegistrationService, private router:Router)
  {
    
  }

  ngOnInit(): void {
  }
  isFirstNameInvalid(){
     return !this.employeeregistration.firstName
  }
  isLastNameInvalid(){
    return !this.employeeregistration.lastName
  }
  isProjectCodeInvalid(){
    return !this.employeeregistration.projectCode
  }
  isEmailInvalid(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(this.employeeregistration.email);
  }
  isUsernameInvalid(): boolean {
    if
    (this.employeeregistration.userName.length>=5){
      return false;}
      return true
  } 
  isPasswordInvalid(): boolean {
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

  
  if ( hasNumber.test(this.employeeregistration.password) &&  hasSpecialChar.test(this.employeeregistration.password) && hasUpperCase.test(this.employeeregistration.password) &&  hasLowerCase.test(this.employeeregistration.password) &&  this.employeeregistration.password.length >= 8    ) {
    return false;
   
  }
  return true
}
isdesignationInvalid(){
  return !this.employeeregistration.designation
}
check(){
  if(
this.isEmailInvalid() == false && this.isUsernameInvalid()==false && this.isFirstNameInvalid()==false && this.isLastNameInvalid() ==false&& this.isdesignationInvalid()==false  && this.isPasswordInvalid()==false && this.isProjectCodeInvalid()==false){
 return false;    
}  
return true;
}
  Validate()
    {
      
      this.employeeregistrationservice.Validate(this.employeeregistration).subscribe({
        next:res=>{
        console.log(res)  
      
          this.router.navigateByUrl('employeeInformation');
          alert("Employee Added Successfully");
        },
      
         error:err=>{
          this.errMsg="Please fill all details!";
          alert("Project Id is Invalid")
        }})
      }

}
