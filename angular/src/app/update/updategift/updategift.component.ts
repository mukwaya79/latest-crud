import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-updategift',
  templateUrl: './updategift.component.html',
  styleUrls: ['./updategift.component.css']
})
export class UpdategiftComponent implements OnInit {

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


  constructor(private gift:GiftService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.gift.getsinglegift(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
       
        inventoryid:result.gift['inventoryid'],
        unit:result.gift['unit'],
        name:result.gift['name'],
        unitprice:result.gift['unitprice'],
        quantity:result.gift['quantity'],
        inventoryvalue:result.gift['inventoryvalue'],
        reorderlevel:result.gift['reorderlevel'],
        reordertime:result.gift['reordertime'],
        quantityinreorder:result.gift['quantityinreorder'],
        discontinued:result.gift['discontinued'],
        
      }
      
    }

    )
  }
  updateitem(){
    return this.gift.Onupdategift(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('gift Data updated Successfully')
      this.router.navigate(['/viewgift'])
    },
    error=>{ console.log(error) })
  }

}
