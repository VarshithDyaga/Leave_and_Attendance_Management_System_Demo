import { HttpClientModule } from '@angular/common/http';
import { Component , Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Admin } from 'src/app/Model/Admin';
import { AdminLoginService } from 'src/app/Services/admin-login.service';
import { MyAuthService } from 'src/app/Services/my-auth.service';

@Injectable()

export class DataSharingService
{
  public isUserLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})

export class AdminloginComponent implements OnInit {
  admin:Admin = {
    userName : "",
    password : ""
 
  }; 

  errMsg:string=''
  constructor(private adminloginservice:AdminLoginService, private router:Router )
  {
    //this.admin= new Admin();
  }

 

  ngOnInit(): void {
  }
  PasswordRequired():boolean{
  return !this.admin.password
  }
  UsernameRequired():boolean{
    return !this.admin.userName
  }
  Validate()
    {
      
      this.adminloginservice.Validate(this.admin).subscribe({
        next:res=>{
        console.log(res)  
      
          this.router.navigateByUrl('dashboard');
        },
      
         error:err=>{
          this.errMsg="invalid login id or password";
          alert("invalid login id or password")
        }})
      }
    }
 









 

 
 



 


