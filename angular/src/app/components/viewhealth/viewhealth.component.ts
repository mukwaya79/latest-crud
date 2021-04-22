import { Component, OnInit } from '@angular/core';

import { HealthService } from 'src/app/services/health.service';


@Component({
  selector: 'app-viewhealth',
  templateUrl: './viewhealth.component.html',
  styleUrls: ['./viewhealth.component.css']
})
export class ViewhealthComponent implements OnInit {

  public Health:any =[]
  
  constructor(private health:HealthService) { }

  ngOnInit(): void {
    this.fetchdata()
  }
  fetchdata(){
    return this.health.getitem().subscribe(data=>{
      console.log(data)
      this.Health= data;
     
    },
    error=>console.log(error))
  }
  delete(id:number){
    return this.health.delete(id).subscribe(()=>{ this.fetchdata() 
    },
    error=>{ console.log(error) })
 }
  
}
