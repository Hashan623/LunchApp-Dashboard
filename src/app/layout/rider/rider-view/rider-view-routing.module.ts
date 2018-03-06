import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiderViewComponent } from './rider-view.component';

const routes: Routes = [
    {
        path: '', component: RiderViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderViewRoutingModule { }
