import { Injectable } from '@angular/core';
import { Admin } from '../Model/Admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http : HttpClient) 
  {}
    Validate(admin :Admin) : Observable<Admin>
    {
      return this.http.post<Admin>('https://localhost:7127/api/Admins/Login',admin);
    }
  }


   

