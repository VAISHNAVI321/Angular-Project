import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardpageRoutingModule } from './cardpage-routing.module';
import { CardpageComponent } from './cardpage.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  declarations: [
    CardpageComponent
  ],
  imports: [
    CommonModule,
    CardpageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CardpageModule { }
