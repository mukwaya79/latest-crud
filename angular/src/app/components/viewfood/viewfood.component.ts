import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {

  public Food:any =[]

  constructor(private food:FoodService) { }

  ngOnInit(): void {

    this.fetchdata()
  }
  fetchdata(){
    return this.food.getitem().subscribe(data=>{
      console.log(data)
      this.Food= data;
     
    },
    error=>console.log(error))
  }
  delete(id:number){
    return this.food.delete(id).subscribe(()=>{ this.fetchdata() 
    },
    error=>{ console.log(error) })
 }
}
