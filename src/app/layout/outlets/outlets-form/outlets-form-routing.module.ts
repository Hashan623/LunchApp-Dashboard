import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletsFormComponent } from './outlets-form.component';

const routes: Routes = [
    {
        path: '', component: OutletsFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutletsFormRoutingModule { }
