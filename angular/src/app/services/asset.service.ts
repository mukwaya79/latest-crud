import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private baseurl = 'http://127.0.0.1:5000/asset'

  constructor(private http:HttpClient) { }

  postitem(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}` ,data)
  }
  getitem():Observable<any>{
    return this.http.get<any>(`${this.baseurl}` )
  }
  delete(id:any){
    
    return this.http.delete<any>(`${this.baseurl}/${id}` );
}
getsingleasset(id:number){
  return this.http.get<any>(`${this.baseurl}/${id}` );
}
 Onupdateasset(id:number,data:any){
  return this.http.put<any>(`${this.baseurl}/${id}`, data);
 }
}
