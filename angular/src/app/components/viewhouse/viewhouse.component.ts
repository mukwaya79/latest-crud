import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-viewhouse',
  templateUrl: './viewhouse.component.html',
  styleUrls: ['./viewhouse.component.css']
})
export class ViewhouseComponent implements OnInit {

  public House:any =[]

  constructor(private house:HouseService) { }

  ngOnInit(): void {

   this.fetchdata()
  }
  fetchdata(){
    return this.house.getitem().subscribe(data=>{
      console.log(data)
      this.House= data;
     
    },
    error=>console.log(error))
  }
  delete(id:number){
    return this.house.delete(id).subscribe(()=>{ this.fetchdata() 
    },
    error=>{ console.log(error) })
 }

}
