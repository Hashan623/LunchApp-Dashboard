import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayFoodComponent } from './day-food.component';

const routes: Routes = [
    {
        path: '', component: DayFoodComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFoodRoutingModule { }
