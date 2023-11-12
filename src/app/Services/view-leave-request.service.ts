import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../Model/LeaveRequest';
import { ViewLeaveRequestComponent } from '../components/Leave/view-leave-request/view-leave-request.component';
import { ApplyLeaves } from '../Model/ApplyLeaves';

@Injectable({
  providedIn: 'root'
})


export class ViewLeaveRequestService {

  private baseUrl = 'https://localhost:7127/api/Leaves';

  constructor(private http : HttpClient) { }

  getAll() : Observable<LeaveRequest[]>{

    return this.http.get<LeaveRequest[]>('https://localhost:7127/api/Leaves');
    
  }


  UpdateLeaveRequest(leavereq : LeaveRequest , id : number ):Observable<any>{

    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url,leavereq);

  }


}
