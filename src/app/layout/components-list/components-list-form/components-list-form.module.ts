import { OutletService } from './../../outlets/outlets.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsListFormRoutingModule } from './components-list-form-routing.module';
import { ComponentsListFormComponent } from './components-list-form.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, ComponentsListFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [ComponentsListFormComponent],
  providers: [OutletService]
})
export class ComponentsListFormModule { }
