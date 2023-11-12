import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Project } from 'src/app/Model/Project';
import { AddNewProjectService } from 'src/app/Services/add-new-project.service';

@Injectable()

export class DataSharingService
{
  public isUserLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent implements OnInit{

  project:Project = {
    isEdit:false,
    projectCode : 0,
    projectName: '',
    projectTechnology: '',
    projectDescription: '',
    projectStatus: ''
  }; 

  errMsg:string=''
  constructor(private addnewprojectservice :AddNewProjectService, private router:Router)
  {
    //this.admin= new Admin();
  }

  ngOnInit(): void {
  }

  Validate()
    {

      if(this.project.projectName == '' || this.project.projectDescription == '' || this.project.projectTechnology== '' || this.project.projectStatus == '')
      {
        
          this.errMsg="The fields cannot be empty";
          alert("The fields cannot be empty")
      }
      else{

      this.addnewprojectservice.Validate(this.project).subscribe({
        next:res=>{
        console.log(res)  
      
          this.router.navigateByUrl('projectInformation');
        },
      
         error:err=>{
          this.errMsg="invalid login id or password";
          alert("invalid login id or password")
        }})
      }
    }
    ValidateProjectName(){
      return !this.project.projectName
    }
    ValidateProjectTechnology(){
      return !this.project.projectTechnology
    }
    ValidateProjectDescription(){
      if( this.project.projectDescription.length>10)
      return false
    return true
    }
    ValidateProjectstatus(){
      return !this.project.projectName
    }
}
