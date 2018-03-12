import { FooddetailService } from '../fooddetail.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDetailFormRoutingModule } from './food-detail-routing.module';
import { FoodDetailFormComponent } from './food-detail-form.component';
import { PageHeaderModule } from '../../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, FoodDetailFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [FoodDetailFormComponent],
  providers: [FooddetailService]
})
export class FoodDetailFormModule { }
