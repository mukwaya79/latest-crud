import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IctService } from 'src/app/services/ict.service';

@Component({
  selector: 'app-updateict',
  templateUrl: './updateict.component.html',
  styleUrls: ['./updateict.component.css']
})
export class UpdateictComponent implements OnInit {

  public form:any ={
 
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

  constructor(private ict:IctService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.ict.getsingleict(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
       
        inventoryid:result.ict['inventoryid'],
        unit:result.ict['unit'],
        name:result.ict['name'],
        unitprice:result.ict['unitprice'],
        quantity:result.ict['quantity'],
        inventoryvalue:result.ict['inventoryvalue'],
        reorderlevel:result.ict['reorderlevel'],
        reordertime:result.ict['reordertime'],
        quantityinreorder:result.ict['quantityinreorder'],
        discontinued:result.ict['discontinued'],
        
      }
      
    }

    )
  }
  updateitem(){
    return this.ict.Onupdateict(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('ICT updated Successfully')
      this.router.navigate(['/viewict'])
    },
    error=>{ console.log(error) })
  }

}
