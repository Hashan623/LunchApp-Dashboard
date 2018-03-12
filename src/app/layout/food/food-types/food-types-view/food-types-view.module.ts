import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodTypesViewRoutingModule } from './food-types-view-routing.module';
import { FoodTypesViewComponent } from './food-types-view.component';
import { PageHeaderModule } from '../../../../shared';

import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [CommonModule, FoodTypesViewRoutingModule, PageHeaderModule, DataTableModule],
  declarations: [FoodTypesViewComponent]
})
export class FoodTypesViewModule { }
