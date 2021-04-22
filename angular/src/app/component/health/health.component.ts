import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from 'src/app/services/health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

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

  constructor(private health:HealthService,private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    console.log(this.form)
    this.health.postitem(this.form).subscribe(()=>{
      alert('Health Data Successfully added')
      this.router.navigate(['/viewhealth'])

  })}
}
