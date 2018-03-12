import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLevelsViewRoutingModule } from './user-levels-view-routing.module';
import { UserLevelsViewComponent } from './user-levels-view.component';
import { PageHeaderModule } from '../../../shared';

import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [CommonModule, UserLevelsViewRoutingModule, PageHeaderModule, DataTableModule],
  declarations: [UserLevelsViewComponent]
})
export class UserLevelsViewModule { }
