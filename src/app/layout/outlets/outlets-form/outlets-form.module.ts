import { OutletService } from '../outlets.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletsFormRoutingModule } from './outlets-form-routing.module';
import { OutletsFormComponent } from './outlets-form.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

//import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [CommonModule, OutletsFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule, AgmCoreModule ],
  declarations: [OutletsFormComponent],
  providers: [OutletService]
})
export class OutletsFormModule { }
