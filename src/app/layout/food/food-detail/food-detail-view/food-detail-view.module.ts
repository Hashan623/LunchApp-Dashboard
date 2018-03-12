import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDetailViewRoutingModule } from './food-detail-view-routing.module';
import { FoodDetailViewComponent } from './food-detail-view.component';
import { PageHeaderModule } from '../../../../shared';

import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [CommonModule, FoodDetailViewRoutingModule, PageHeaderModule, DataTableModule],
  declarations: [FoodDetailViewComponent]
})
export class FoodDetailViewModule { }
