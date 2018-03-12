import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDetailViewComponent } from './food-detail-view.component';

const routes: Routes = [
    {
        path: '', component: FoodDetailViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodDetailViewRoutingModule { }
