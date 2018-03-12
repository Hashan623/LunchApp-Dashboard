import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLevelsFormComponent } from './user-levels-form.component';

const routes: Routes = [
    {
        path: '', component: UserLevelsFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLevelsFormRoutingModule { }
