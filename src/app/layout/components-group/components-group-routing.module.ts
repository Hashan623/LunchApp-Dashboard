import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsGroupComponent } from './components-group.component';

const routes: Routes = [
    {
        path: '', component: ComponentsGroupComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsGroupRoutingModule { }
