import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsViewComponent } from './components-list-view.component';

const routes: Routes = [
    {
        path: '', component: ComponentsViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsViewRoutingModule { }
