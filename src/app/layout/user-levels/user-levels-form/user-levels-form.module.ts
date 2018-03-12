import { UsersCrudService } from './../../users/users-crud.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLevelsFormRoutingModule } from './user-levels-form-routing.module';
import { UserLevelsFormComponent } from './user-levels-form.component';
import { PageHeaderModule } from '../../../shared';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, UserLevelsFormRoutingModule, PageHeaderModule, FormsModule,HttpModule, HttpClientModule  ],
  declarations: [UserLevelsFormComponent],
  providers: [UsersCrudService]
})
export class UserLevelsFormModule { }
