import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersViewRoutingModule } from './orders-view-routing.module';
import { OrdersViewComponent } from './orders-view.component';
import { PageHeaderModule } from '../../../shared';

import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [CommonModule, OrdersViewRoutingModule, PageHeaderModule, DataTableModule],
  declarations: [OrdersViewComponent]
})
export class OrdersViewModule { }
