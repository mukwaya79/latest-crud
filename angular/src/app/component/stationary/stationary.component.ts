import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationaryService } from 'src/app/services/stationary.service';

@Component({
  selector: 'app-stationary',
  templateUrl: './stationary.component.html',
  styleUrls: ['./stationary.component.css']
})
export class StationaryComponent implements OnInit {
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

  constructor(private stationary:StationaryService,private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    console.log(this.form)
    this.stationary.postitem(this.form).subscribe(()=>{
      alert('Stationary Data Successfully added')
      this.router.navigate(['/viewstationary'])

  })}

}
