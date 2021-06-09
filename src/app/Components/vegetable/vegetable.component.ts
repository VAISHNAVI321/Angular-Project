import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import * as data from '../../../assets/vegetables.json';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {
  
  constructor(private data:ServiceService) { }
  products:any = this.data.veg_products;
  
  starList: boolean[] = [true,true,true,true,true]; 
  setStar(d:any){                             
    for(var i=0;i<=4;i++){  
      if(i<d){  
        this.starList[i]=false;  
      }  
      else{  
        this.starList[i]=true;  
      }  
   }
  }  

  ngOnInit(): void {
  }

}
