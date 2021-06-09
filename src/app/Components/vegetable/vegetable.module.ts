import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegetableRoutingModule } from './vegetable-routing.module';
import { VegetableComponent } from './vegetable.component';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { VegProductsComponent } from './veg-products/veg-products.component';


@NgModule({
  declarations: [
    VegetableComponent
    //VegProductsComponent
  ],
  imports: [
    CommonModule,
    VegetableRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class VegetableModule { }
