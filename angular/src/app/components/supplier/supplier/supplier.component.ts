import { WellsService } from './../../../services/wells.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  public supplierform ={
    name:"",
    email:" ",
    phone:"",
    telephone:"",
    number:"",
    tin:""
  };

  constructor(private wells:WellsService,private router:Router) { }

  ngOnInit(): void {
  }
  adddata(){
     
    console.log(this.supplierform)
    this.wells.adddata(this.supplierform).subscribe(
    res=>{console.log(res);
      alert('Supplier Data Successfully added')
      this.router.navigate(['/viewsupplier'])
    
   }
    )
  }
}
