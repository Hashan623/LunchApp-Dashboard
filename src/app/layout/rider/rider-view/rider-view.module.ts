import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiderViewRoutingModule } from './rider-view-routing.module';
import { RiderViewComponent } from './rider-view.component';
import { PageHeaderModule } from '../../../shared';

//import { DataTableModule } from "angular-4-data-table";

@NgModule({
  imports: [CommonModule, RiderViewRoutingModule, PageHeaderModule],
  declarations: [RiderViewComponent]
})
export class RiderViewModule { }
