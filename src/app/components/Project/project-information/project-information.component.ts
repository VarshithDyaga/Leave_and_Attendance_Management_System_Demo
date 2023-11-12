import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Model/Project';
import { ProjectInformationService } from 'src/app/Services/project-information.service';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.css']
})
export class ProjectInformationComponent implements OnInit{

  project:Project[]=[];

  constructor(private projectservice: ProjectInformationService,private router:Router){}

  ngOnInit(): void {

    this.projectservice.getAll().subscribe({
      next:(res)=>{
        this.project=res;
      },
      error:(error)=>{
        console.error('Failed to fetch projects:',error);
      }
    });
      
    }
    
  
  validateField(item:any):string{
    if(item !== ''){
      return "" ;
    }
    else{
      return "Invalid Input";
    }
    

  }
  ValidateForm(obj:any):boolean{
    if(obj.projectCode !='' && obj.projectName !='' && obj.projectDescription !='' && obj.projectTechnology !='' && obj.projectStatus !='')
      {return true;
      }
    else{
      return false;
    }
  }

  onUpdate(project:Project) {
    if (this.ValidateForm(project)) {
     
           this.projectservice. UpdateProject(project).subscribe({
          next: (res) => {
            
            alert('Project data updated successfully');
                project.isEdit = false;
          },
          error: (error) => {
            console.error('Failed to update Project data:', error);
                      }
        });
     
    } else {
      alert('Please fill in all required fields before updating.');
    }
  }
  onCancel(obj:any){
    obj.isEdit=false;
  }
  clickMethod1(id : number) {

    if(confirm("This action cannot be reversed, Are you sure to delete? " )) {

      this.delete_emp(id);
    }
  }
  
  delete_emp(id : number)
  {
    

      this.projectservice.DeleteProject(id).subscribe({
        next:(r)=>{
  
          alert("Successfully deleted")
   
          location.reload();
        }
      })
    
  }


  onEdit(item:any){
    this.project.forEach(element => {
      element.isEdit=false;
    });
    item.isEdit=true;
  }
  
  

}