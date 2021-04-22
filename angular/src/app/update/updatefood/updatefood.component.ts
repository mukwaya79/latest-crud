import { FoodService } from './../../services/food.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.css']
})
export class UpdatefoodComponent implements OnInit {

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

  constructor(private food:FoodService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.food.getsinglefood(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
        typeof:result.food['typeof'],
        inventoryid:result.food['inventoryid'],
        unit:result.food['unit'],
        name:result.food['name'],
        unitprice:result.food['unitprice'],
        quantity:result.food['quantity'],
        inventoryvalue:result.food['inventoryvalue'],
        reorderlevel:result.food['reorderlevel'],
        reordertime:result.food['reordertime'],
        quantityinreorder:result.food['quantityinreorder'],
        discontinued:result.food['discontinued'],
        
      }
      
    }

    )
  }
  updateitem(){
    return this.food.Onupdatefood(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('Food updated Successfully')
      this.router.navigate(['/viewfood'])
    },
    error=>{ console.log(error) })
  }

}
