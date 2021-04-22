import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WellsService {

  private baseurl = 'http://127.0.0.1:5000/supplier'

  constructor(private http:HttpClient) { }

  adddata(data: any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}` ,data)
  }
  
  fetchdata():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}` )
  }
  delete(id:any){
    
    return this.http.delete<any>(`${this.baseurl}/${id}` );
    
  }
  getonesupplier(id:any){
    
    return this.http.get<any>(`${this.baseurl}/${id}` );
    
  }
  Onupdate(id:any,val:any){
    
    return this.http.patch<any>(`${this.baseurl}/${id}`, val); 
  }
}
