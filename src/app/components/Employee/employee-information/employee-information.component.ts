import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Model/Employee';
import { EmployeeRegistration } from 'src/app/Model/EmployeeRegistration';
import { LeaveRequest } from 'src/app/Model/LeaveRequest';
import { EmployeeInformationService } from 'src/app/Services/employee-information.service';
import { SearchPipe } from 'src/app/search.pipe';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css'],
  providers: [SearchPipe]
})
export class EmployeeInformationComponent implements OnInit {


  employeeregistration:EmployeeRegistration[]=[{
    
    isEdit : false,
    employeeId : 0,
    firstName : "",
    lastName : "",
    userName : "",
    password : "",
    email : "",
    projectCode : 0,
    designation : ""
    
  }];

  update_emp:EmployeeRegistration={
    
    isEdit : false,
    employeeId : 0,
    firstName : "",
    lastName : "",
    userName : "",
    password : "",
    email : "",
    projectCode : 0,
    designation : ""
    
  };

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
SearchText: any='';



  constructor(private empServices:EmployeeInformationService,private router:Router){}

  ngOnInit(): void {

    this.empServices.getAll().subscribe({
      next:(res)=>{
        this.employeeregistration=res;
      }
    })
    
  }


  
  onEdit(item:any){
    this.employeeregistration.forEach(element => {
      element.isEdit=false;
    });
    item.isEdit=true;
  }
 
  clickMethod1(id : number) {

    if(confirm("This action cannot be reversed, Are you sure to delete? " )) {

      this.delete_emp(id);
    }
  }

  delete_emp(id : number)
  {
    

      this.empServices.DeleteEmployee(id).subscribe({
        next:(r)=>{
  
          alert("Successfully deleted")
   
          location.reload();
        }
      })
    
  }



 
  validateField(item:any){
    if(item == ''){
      return true;
    }
    else{
      return false;
    }
  }
  ValidateForm(obj:any){
    if(obj.firstName !='' && obj.lastName !='' && obj.userName !='' && obj.password !='' && obj.email !='' && obj.projectCode !='' && obj.designation !='')
      {return false;
      }
    else{
      return true;
    }
  }
  onUpdate(employee: EmployeeRegistration) {
    if (!this.ValidateForm(employee)) {
     
        this.empServices.UpdateEmployee(employee).subscribe({
          next: (res) => {
            // Handle the success case
            alert('Employee data updated successfully');
            employee.isEdit = false;
          },
          error: (error) => {
            alert('The Project Code is not Present');
            console.error('Failed to update employee data:', error);
            // Handle the error case
          }
        });
      }
      
     
         
      
     else {
      alert('Please fill in all required fields before updating.');
    }
  }
 
  onCancel(obj:any){
    obj.isEdit=false;
  }
  ValidateUserName(userName:string){
     if(userName  ===''){
      return "Required";
     }
      else{
        if(userName.length>4){
          return "";
        }
        else{
        return "Minimum 5 Characters"
        }
      }
     }
     validatePassword(password: string): string {
     
      const hasNumber = /\d/;
      const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
      const hasUpperCase = /[A-Z]/;
      const hasLowerCase = /[a-z]/;
   
     
      if (
        hasNumber.test(password) &&
        hasSpecialChar.test(password) &&
        hasUpperCase.test(password) &&
        hasLowerCase.test(password) &&
        password.length >= 8
      ) {
        return "";
      } else {
        return "Password must include at least one number, one special character, one uppercase letter, one lowercase letter, and be at least 8 characters long.";
      }
    }
    validateEmail(email: string): string {
      // Regular expression to validate email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
      if (emailRegex.test(email)) {
        return "";
      } else {
        return "Invalid email format. Please enter a valid email address.";
      }
    }
    canUpdate(employee: EmployeeRegistration): boolean {
      if(this.validateEmail(employee.email)=='' && this.ValidateUserName(employee.userName)=='' && this.validatePassword(employee.password)=='' && this.validateField(employee.firstName)==false && this.validateField(employee.lastName)==false){
      return false ;
      }
      else{
        return true
      }
    }
   
  


  }




 

