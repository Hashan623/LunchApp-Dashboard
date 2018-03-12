import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLevelPermissionRoutingModule } from './user-level-permission-routing.module';
import { UserLevelPermissionComponent } from './user-level-permission.component';
import { PageHeaderModule } from '../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';



@NgModule({
  imports: [CommonModule, UserLevelPermissionRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule, AngularMultiSelectModule],
  declarations: [UserLevelPermissionComponent],
  providers: []
})
export class UserLevelPermissionModule { }
