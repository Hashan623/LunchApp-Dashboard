import { ComponentGroupService } from './components-group.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsGroupRoutingModule } from './components-group-routing.module';
import { ComponentsGroupComponent } from './components-group.component';
import { PageHeaderModule } from '../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';



@NgModule({
  imports: [CommonModule, ComponentsGroupRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule, AngularMultiSelectModule],
  declarations: [ComponentsGroupComponent],
  providers: [ComponentGroupService]
})
export class ComponentsGroupModule { }
