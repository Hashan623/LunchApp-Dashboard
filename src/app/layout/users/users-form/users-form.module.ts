import { UsersCrudService } from '../users-crud.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersFormRoutingModule } from './users-form-routing.module';
import { UsersFormComponent } from './users-form.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, UsersFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [UsersFormComponent],
  providers: [UsersCrudService]
})
export class UsersFormModule { }
