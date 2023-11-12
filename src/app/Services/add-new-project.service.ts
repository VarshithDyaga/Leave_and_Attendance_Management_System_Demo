import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../Model/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewProjectService {

  constructor(private http : HttpClient) { }
  
  Validate(project : Project) : Observable<Project>
  {
    return this.http.post<Project>('https://localhost:7127/api/Projects',project);
  }
}
