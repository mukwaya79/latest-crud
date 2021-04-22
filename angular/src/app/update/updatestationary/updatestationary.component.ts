import { StationaryService } from 'src/app/services/stationary.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestationary',
  templateUrl: './updatestationary.component.html',
  styleUrls: ['./updatestationary.component.css']
})
export class UpdatestationaryComponent implements OnInit {

  public form:any ={
 
    inventoryid:'',
    unit:'',
    name:'',
    unitprice:'',
    quantity:'',
    inventoryvalue:'',
    reorderlevel:'',
    reordertime:'',
    quantityinreorder:'',
    discontinued:'',

  }


  constructor(private stationary:StationaryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.stationary.getsinglestationary(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
       
        inventoryid:result.stationary['inventoryid'],
        unit:result.stationary['unit'],
        name:result.stationary['name'],
        unitprice:result.stationary['unitprice'],
        quantity:result.stationary['quantity'],
        inventoryvalue:result.stationary['inventoryvalue'],
        reorderlevel:result.stationary['reorderlevel'],
        reordertime:result.stationary['reordertime'],
        quantityinreorder:result.stationary['quantityinreorder'],
        discontinued:result.stationary['discontinued'],
        
      }
      
    }

    )

  }

  updateitem(){
    return this.stationary.Onupdatestationary(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('Stationary Data updated Successfully')
      this.router.navigate(['/viewstationary'])
    },
    error=>{ console.log(error) })
  }


}
