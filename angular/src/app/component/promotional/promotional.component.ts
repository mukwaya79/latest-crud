import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-promotional',
  templateUrl: './promotional.component.html',
  styleUrls: ['./promotional.component.css']
})
export class PromotionalComponent implements OnInit {

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

  constructor(private gift:GiftService,private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    console.log(this.form)
    this.gift.postitem(this.form).subscribe(()=>{
      alert('gift Data Successfully added')
      this.router.navigate(['/viewgift'])

  })}

}
