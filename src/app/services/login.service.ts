import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginAPI } from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

 
 
  //login user
  public loginUser(user:any){
    
    return this.http.post(`"https://demo.credy.in/api/v1/usermodule/login/"`,user)
  }
  //get token
  public getToken(){
    return localStorage.getItem('token');
  }
  public setToken(token:string){
    if(localStorage!==undefined){
      localStorage.setItem('token',token);
    }
  }
  // is Loggedin
  public isLoggedIn(){
    return localStorage!==undefined && localStorage.getItem('token')!==null;
  }
  

}
