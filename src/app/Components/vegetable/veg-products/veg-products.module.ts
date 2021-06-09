import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegProductsRoutingModule } from './veg-products-routing.module';
import { VegProductsComponent } from './veg-products.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    VegProductsComponent
  ],
  imports: [
    CommonModule,
    VegProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class VegProductsModule { }
