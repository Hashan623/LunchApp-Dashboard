import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletsViewRoutingModule } from './outlets-view-routing.module';
import { OutletsViewComponent } from './outlets-view.component';
import { PageHeaderModule } from '../../../shared';

import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [CommonModule, OutletsViewRoutingModule, PageHeaderModule, DataTableModule],
  declarations: [OutletsViewComponent]
})
export class OutletsViewModule { }
