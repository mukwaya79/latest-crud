import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WellsService } from 'src/app/services/wells.service';

@Component({
  selector: 'app-updatesupplier',
  templateUrl: './updatesupplier.component.html',
  styleUrls: ['./updatesupplier.component.css']
})
export class UpdatesupplierComponent implements OnInit {

  updatesupplierform ={
    name:"",
    email:" ",
    phone:"",
    telephone:"",
    number:"",
    tin:""
  }

  constructor(private wells:WellsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.wells.getonesupplier(this.router.snapshot.params.id).subscribe(result=>{
      this.updatesupplierform={
        name:result.supplier['name'],
        email:result.supplier['email'],
        phone:result.supplier['phone'],
        telephone:result.supplier['telephone'],
        number:result.supplier['number'],
        tin:result.supplier['tin']
      }
      
    }

    )
    
  }
  Update(){
    
    return this.wells.Onupdate(this.router.snapshot.params.id,this.updatesupplierform).subscribe((result)=>{
      console.log(result)
      
    },
    error=>{ console.log(error) })
 }
 
}
