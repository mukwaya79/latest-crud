import { Component, OnInit } from '@angular/core';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-viewgift',
  templateUrl: './viewgift.component.html',
  styleUrls: ['./viewgift.component.css']
})
export class ViewgiftComponent implements OnInit {

  public Gift:any =[]

  constructor(private gift:GiftService) { }

  ngOnInit(): void {

    this.fetchdata()
  }
  fetchdata(){
    return this.gift.getitem().subscribe(data=>{
      console.log(data)
      this.Gift= data;
     
    },
    error=>console.log(error))
  }
  delete(id:number){
    return this.gift.delete(id).subscribe(()=>{ this.fetchdata() 
    },
    error=>{ console.log(error) })
 }

}
