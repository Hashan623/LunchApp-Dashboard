import { FoodtypeService } from '../foodtype.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodTypesFormRoutingModule } from './food-types-routing.module';
import { FoodTypesFormComponent } from './food-types-form.component';
import { PageHeaderModule } from '../../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, FoodTypesFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [FoodTypesFormComponent],
  providers: [FoodtypeService]
})
export class FoodTypesFormModule { }
