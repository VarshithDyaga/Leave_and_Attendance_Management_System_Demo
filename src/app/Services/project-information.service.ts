import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../Model/Project';


@Injectable({
  providedIn: 'root'
})
export class ProjectInformationService {

  private baseUrl = 'https://localhost:7127/api/Projects';
  constructor(private http : HttpClient) { }

  getAll() : Observable<Project[]>{

    return this.http.get<Project[]>('https://localhost:7127/api/Projects');
    
  }
  UpdateProject(project:Project){
    const url = `${this.baseUrl}/${project.projectCode}`;
    return this.http.put(url, project);
  }
  DeleteProject(id :number) : Observable<Project>{

    return this.http.delete<Project>('https://localhost:7127/api/Projects/'+id);
  }


}
