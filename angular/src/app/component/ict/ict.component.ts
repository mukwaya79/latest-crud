import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IctService } from 'src/app/services/ict.service';

@Component({
  selector: 'app-ict',
  templateUrl: './ict.component.html',
  styleUrls: ['./ict.component.css']
})
export class IctComponent implements OnInit {

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

  constructor(private ict:IctService,private router:Router) { }

  ngOnInit(): void {
  }

  additem(){
    console.log(this.form)
    this.ict.postitem(this.form).subscribe(()=>{
      alert('ICT Data Successfully added')
      this.router.navigate(['/viewict'])

  })}
}
