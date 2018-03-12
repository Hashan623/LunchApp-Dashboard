import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodTypesViewComponent } from './food-types-view.component';

const routes: Routes = [
    {
        path: '', component: FoodTypesViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodTypesViewRoutingModule { }
