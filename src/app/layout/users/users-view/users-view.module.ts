import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersViewRoutingModule } from './users-view-routing.module';
import { UsersViewComponent } from './users-view.component';
import { PageHeaderModule } from '../../../shared';

import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [CommonModule, UsersViewRoutingModule, PageHeaderModule, DataTableModule],
  declarations: [UsersViewComponent]
})
export class UsersViewModule { }
