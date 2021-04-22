import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

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

  constructor(private food:FoodService, private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    console.log(this.form)
    this.food.postitem(this.form).subscribe(()=>{
      alert('Asset Data Successfully added')
      this.router.navigate(['/viewfood'])

  })}

}
