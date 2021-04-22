import { AssetService } from './../../services/asset.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
   
  public form  ={
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
  constructor(private asset:AssetService,private router:Router) { }

  ngOnInit(): void {
  }

  additem(){
    console.log(this.form)
    this.asset.postitem(this.form).subscribe(()=>{
      alert('Asset Data Successfully added')
      this.router.navigate(['/viewasset'])

  })}

}
