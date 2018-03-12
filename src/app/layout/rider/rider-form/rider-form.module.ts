import { RiderService } from '../rider.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiderFormRoutingModule } from './rider-form-routing.module';
import { RiderFormComponent } from './rider-form.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, RiderFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [RiderFormComponent],
  providers: [RiderService]
})
export class RiderFormModule { }
