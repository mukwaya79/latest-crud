import { IctService } from './../../services/ict.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewict',
  templateUrl: './viewict.component.html',
  styleUrls: ['./viewict.component.css']
})
export class ViewictComponent implements OnInit {

  public Ict:any =[]

  constructor(private ict:IctService) { }

  ngOnInit(): void {
    this.fetchdata()
  }
  fetchdata(){
    return this.ict.getitem().subscribe(data=>{
      console.log(data)
      this.Ict= data;
     
    },
    error=>console.log(error))
  }
  delete(id:number){
    return this.ict.delete(id).subscribe(()=>{ this.fetchdata() 
    },
    error=>{ console.log(error) })
 }

}
