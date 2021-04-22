import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthService } from 'src/app/services/health.service';

@Component({
  selector: 'app-updatehealth',
  templateUrl: './updatehealth.component.html',
  styleUrls: ['./updatehealth.component.css']
})
export class UpdatehealthComponent implements OnInit {
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


  constructor(private health:HealthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.health.getsinglehealth(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
       
        inventoryid:result.health['inventoryid'],
        unit:result.health['unit'],
        name:result.health['name'],
        unitprice:result.health['unitprice'],
        quantity:result.health['quantity'],
        inventoryvalue:result.health['inventoryvalue'],
        reorderlevel:result.health['reorderlevel'],
        reordertime:result.health['reordertime'],
        quantityinreorder:result.health['quantityinreorder'],
        discontinued:result.health['discontinued'],
        
      }
      
    }

    )
  }
  updateitem(){
    return this.health.Onupdatehealth(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('Health Data updated Successfully')
      this.router.navigate(['/viewhealth'])
    },
    error=>{ console.log(error) })
  }

}
