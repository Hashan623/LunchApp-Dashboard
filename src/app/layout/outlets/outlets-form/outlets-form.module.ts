import { OutletService } from '../outlets.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletsFormRoutingModule } from './outlets-form-routing.module';
import { OutletsFormComponent } from './outlets-form.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, OutletsFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [OutletsFormComponent],
  providers: [OutletService]
})
export class OutletsFormModule { }
