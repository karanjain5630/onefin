import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any
  disableLogin:boolean;
  constructor(private _snack:MatSnackBar,
    private router:Router,
    private loginService:LoginService) { 
    this.user={
      username:"",
      password:""
    }
    this.disableLogin=false;
  }
  clearAll(){
    this.user={
      username:null,
      password:null
    }
  }
  onSubmit(loginForm:any){
    this.disableLogin=true;
    this.loginService.loginUser(this.user).subscribe((res:any)=>{
      if(res.is_success){
        this.loginService.setToken(res.data.token)
        this.router.navigate(['/movie'])
      }
    },(err:any)=>{
      console.log(err);
      
      this._snack.open("Login Failed, Invalid Credentials",'',{duration:2000,verticalPosition:'bottom'})
      this.disableLogin=false;
      this.clearAll()
      loginForm.controls.username.touched=false
      loginForm.controls.password.touched=false
    })
  }
  ngOnInit(): void {
  }

}
