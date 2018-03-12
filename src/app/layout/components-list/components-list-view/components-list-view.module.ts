import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsViewRoutingModule } from './components-list-view-routing.module';
import { ComponentsViewComponent } from './components-list-view.component';
import { PageHeaderModule } from '../../../shared';

import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [CommonModule, ComponentsViewRoutingModule, PageHeaderModule, DataTableModule],
  declarations: [ComponentsViewComponent]
})
export class ComponentsListViewModule { }
