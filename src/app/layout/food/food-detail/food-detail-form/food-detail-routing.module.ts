import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDetailFormComponent } from './food-detail-form.component';

const routes: Routes = [
    {
        path: '', component: FoodDetailFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodDetailFormRoutingModule { }
