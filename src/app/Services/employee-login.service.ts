import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {
  

  constructor(private http : HttpClient) 
  {}
    Validate(employee :Employee) : Observable<Employee>
    {
      return this.http.post<Employee>('https://localhost:7127/api/Employees/Login',employee);
      
    }

    check(employee :Employee) : any
    {
      if(employee.designation == "manager")
      {
          return employee.designation
      }
      else
      {
        return "employee";
      }
      
    }
}
