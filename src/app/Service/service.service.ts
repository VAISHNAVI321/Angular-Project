import { Injectable } from '@angular/core';
import * as data from '../../assets/fruits.json';
import * as vegdata from '../../assets/vegetables.json';
import * as orderdata from '../../assets/orders.json';
import * as user_data from '../../assets/users.json';

  @Injectable({
    providedIn: 'root'
})
export class ServiceService{
  products:  any  = (data  as  any).default;
  veg_products:  any  = (vegdata  as  any).default;
  orders: any = (orderdata as any).default;
  users: any = (user_data as any).default;
  
  constructor() { }
  

  

}
