import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDetailTypeComponent } from './food-detail-type.component';

const routes: Routes = [
    {
        path: '', component: FoodDetailTypeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodDetailTypeRoutingModule { }
