import { OutletService } from './../../outlets/outlets.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersFormRoutingModule } from './orders-form-routing.module';
import { OrdersFormComponent } from './orders-form.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, OrdersFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [OrdersFormComponent],
  providers: [OutletService]
})
export class OrdersFormModule { }
