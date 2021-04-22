import { StationaryService } from 'src/app/services/stationary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstationary',
  templateUrl: './viewstationary.component.html',
  styleUrls: ['./viewstationary.component.css']
})
export class ViewstationaryComponent implements OnInit {

  public Stationary :any =[]

  constructor(private stationary:StationaryService) { }

  ngOnInit(): void {
   this.fetchdata()
  }

  fetchdata(){
    return this.stationary.getitem().subscribe(data=>{
      console.log(data)
      this.Stationary= data;
     
    },
    error=>console.log(error))
  }
  delete(id:number){
    return this.stationary.delete(id).subscribe(()=>{ this.fetchdata() 
    },
    error=>{ console.log(error) })
 }

}
