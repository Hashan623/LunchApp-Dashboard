import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsListFormComponent } from './components-list-form.component';

const routes: Routes = [
    {
        path: '', component: ComponentsListFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsListFormRoutingModule { }
