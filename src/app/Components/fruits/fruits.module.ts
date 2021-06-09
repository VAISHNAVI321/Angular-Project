import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './fruits.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FruitsComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class FruitsModule { }
