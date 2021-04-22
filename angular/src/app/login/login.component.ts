import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public form = {
    
    email : "",
    password:""
  }
  

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  

   logdata(){
     
     console.log(this.form)
     this.auth.logdata(this.form).subscribe(
      res=>{console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/dashboard'])
        },
       err=>console.log(err)
     )
   }
}
