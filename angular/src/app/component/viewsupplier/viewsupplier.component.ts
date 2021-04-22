import { WellsService } from './../../services/wells.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsupplier',
  templateUrl: './viewsupplier.component.html',
  styleUrls: ['./viewsupplier.component.css']
})
export class ViewsupplierComponent implements OnInit {

  public Supplier:any =[]

  constructor(private wells:WellsService) { }

  ngOnInit(): void {
    this.fetchdata();
  }
   fetchdata(){
     return this.wells.fetchdata().subscribe(data=>{
       console.log(data)
       this.Supplier= data;
      
     },
     error=>console.log(error))
   }
   delete(id:number){
      return this.wells.delete(id).subscribe(()=>{ this.fetchdata() 
      },
      error=>{ console.log(error) })
   }
  
}
