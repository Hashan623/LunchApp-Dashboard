import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiderFormComponent } from './rider-form.component';

const routes: Routes = [
    {
        path: '', component: RiderFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderFormRoutingModule { }
