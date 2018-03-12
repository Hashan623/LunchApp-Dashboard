import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodTypesFormComponent } from './food-types-form.component';

const routes: Routes = [
    {
        path: '', component: FoodTypesFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodTypesFormRoutingModule { }
