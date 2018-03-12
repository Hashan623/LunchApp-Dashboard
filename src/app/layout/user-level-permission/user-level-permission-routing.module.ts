import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLevelPermissionComponent } from './user-level-permission.component';

const routes: Routes = [
    {
        path: '', component: UserLevelPermissionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLevelPermissionRoutingModule { }
