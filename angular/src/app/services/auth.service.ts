import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseurl = 'http://127.0.0.1:5000'

  constructor(private http:HttpClient,private router:Router) { }

 
  logdata(data: any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/login` ,data)
}

 loggedIn(){
   return !!localStorage.getItem('token')
 }
 //gettoken(){
  // return localStorage.getItem('token')
 //}
 logoutUser(){
  localStorage.removeItem('token') 
    return this.router.navigate(['/home'])
 }
 
}
