import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRegistration } from '../Model/EmployeeRegistration';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  constructor(private http : HttpClient) { }
  
  Validate(employeeregistration : EmployeeRegistration) : Observable<EmployeeRegistration>
  {
    return this.http.post<EmployeeRegistration>('https://localhost:7127/api/Employees',employeeregistration);
  }
}
