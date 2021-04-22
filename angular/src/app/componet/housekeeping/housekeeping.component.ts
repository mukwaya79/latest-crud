import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css']
})
export class HousekeepingComponent implements OnInit {

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

  constructor(private house:HouseService, private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    console.log(this.form)
    this.house.postitem(this.form).subscribe(()=>{
      alert('house Data Successfully added')
      this.router.navigate(['/viewhouse'])

  })}

}
