import { AssetService } from './../../services/asset.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateasset',
  templateUrl: './updateasset.component.html',
  styleUrls: ['./updateasset.component.css']
})
export class UpdateassetComponent implements OnInit {

  public form:any ={
    typeof:'',
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

  constructor(private asset:AssetService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.asset.getsingleasset(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
        typeof:result.asset['typeof'],
        inventoryid:result.asset['inventoryid'],
        unit:result.asset['unit'],
        name:result.asset['name'],
        unitprice:result.asset['unitprice'],
        quantity:result.asset['quantity'],
        inventoryvalue:result.asset['inventoryvalue'],
        reorderlevel:result.asset['reorderlevel'],
        reordertime:result.asset['reordertime'],
        quantityinreorder:result.asset['quantityinreorder'],
        discontinued:result.asset['discontinued'],
        
      }
      
    }

    )
  }
  updateitem(){
    return this.asset.Onupdateasset(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('asset updated Successfully')
      this.router.navigate(['/viewasset'])
    },
    error=>{ console.log(error) })
  }
}
