import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFoodRoutingModule } from './day-food-routing.module';
import { DayFoodComponent } from './day-food.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';



@NgModule({
  imports: [CommonModule, DayFoodRoutingModule, 
    PageHeaderModule, FormsModule,HttpModule, HttpClientModule, AngularMultiSelectModule],
  declarations: [DayFoodComponent],
  providers: []
})
export class DayFoodModule { }
