import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplyLeaves } from '../Model/ApplyLeaves';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../Model/LeaveRequest';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeavesService {

 
  constructor(private http : HttpClient) { }
  
  Validate(applyleaves : ApplyLeaves) : Observable<ApplyLeaves>
  {
    return this.http.post<ApplyLeaves>('https://localhost:7127/api/Leaves',applyleaves);
  }


}
