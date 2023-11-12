import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeRegistration } from '../Model/EmployeeRegistration';
import { Observable } from 'rxjs';
import { Project } from '../Model/Project';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInformationService {

  private baseUrl = 'https://localhost:7127/api/Employees';

  constructor(private http : HttpClient) { }

  getAll() : Observable<EmployeeRegistration[]>{

    return this.http.get<EmployeeRegistration[]>('https://localhost:7127/api/Employees');
    
  }

  UpdateEmployee(employee: EmployeeRegistration): Observable<any> {
    const url = `${this.baseUrl}/${employee.employeeId}`;
    return this.http.put(url, employee);
  }
 

  DeleteEmployee(id : number) : Observable<EmployeeRegistration>{

    return this.http.delete<EmployeeRegistration>('https://localhost:7127/api/Employees/'+id);
  }
  getProjectById(projectCode: number): Observable<Project | null> {
    const projectUrl = `https://localhost:7127/api/Projects/${projectCode}`;
    return this.http.get<Project | null>(projectUrl);
  }

  }
  
 

