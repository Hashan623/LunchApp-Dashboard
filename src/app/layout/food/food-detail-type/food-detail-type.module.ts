import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDetailTypeRoutingModule } from './food-detail-type-routing.module';
import { FoodDetailTypeComponent } from './food-detail-type.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';



@NgModule({
  imports: [CommonModule, FoodDetailTypeRoutingModule,
    PageHeaderModule, FormsModule,HttpModule, HttpClientModule, AngularMultiSelectModule],
  declarations: [FoodDetailTypeComponent],
  providers: []
})
export class FoodDetailTypeModule { }
