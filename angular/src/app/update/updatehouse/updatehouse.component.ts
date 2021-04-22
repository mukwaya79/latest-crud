import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-updatehouse',
  templateUrl: './updatehouse.component.html',
  styleUrls: ['./updatehouse.component.css']
})
export class UpdatehouseComponent implements OnInit {

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


  constructor(private house:HouseService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.house.getsinglehouse(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
       
        inventoryid:result.house['inventoryid'],
        unit:result.house['unit'],
        name:result.house['name'],
        unitprice:result.house['unitprice'],
        quantity:result.house['quantity'],
        inventoryvalue:result.house['inventoryvalue'],
        reorderlevel:result.house['reorderlevel'],
        reordertime:result.house['reordertime'],
        quantityinreorder:result.house['quantityinreorder'],
        discontinued:result.house['discontinued'],
        
      }
      
    }

    )
  }
  updateitem(){
    return this.house.Onupdatehouse(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('house Data updated Successfully')
      this.router.navigate(['/viewhouse'])
    },
    error=>{ console.log(error) })
  }

}
