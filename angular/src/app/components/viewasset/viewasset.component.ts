import { AssetService } from './../../services/asset.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewasset',
  templateUrl: './viewasset.component.html',
  styleUrls: ['./viewasset.component.css']
})
export class ViewassetComponent implements OnInit {

  public Asset:any = []

  constructor(private asset:AssetService) { }

  ngOnInit(): void {

    this.fetchdata();
  }

  

  fetchdata(){
    return this.asset.getitem().subscribe(data=>{
      console.log(data)
      this.Asset= data;
     
    },
    error=>console.log(error))
  }
  delete(id:number){
    return this.asset.delete(id).subscribe(()=>{ this.fetchdata() 
    },
    error=>{ console.log(error) })
 }

  
}
