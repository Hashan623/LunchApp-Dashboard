import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            
            { path: 'outlets-view', loadChildren: './outlets/outlets-view/outlets-view.module#OutletsViewModule' },
            { path: 'outlets-form', loadChildren: './outlets/outlets-form/outlets-form.module#OutletsFormModule' },
            //{ path: 'outlets-form/:id', loadChildren: './outlets/outlets-form/outlets-form.module#OutletsFormModule' },

            { path: 'rider-view', loadChildren: './rider/rider-view/rider-view.module#RiderViewModule' },
            { path: 'rider-form', loadChildren: './rider/rider-form/rider-form.module#RiderFormModule' },

            { path: 'food-detail-view', loadChildren: './food/food-detail/food-detail-view/food-detail-view.module#FoodDetailViewModule'},
            { path: 'food-detail-form', loadChildren: './food/food-detail/food-detail-form/food-detail-form.module#FoodDetailFormModule'},

            { path: 'food-types-view', loadChildren: './food/food-types/food-types-view/food-types-view.module#FoodTypesViewModule'},
            { path: 'food-types-form', loadChildren: './food/food-types/food-types-form/food-types-form.module#FoodTypesFormModule'},

            { path: 'orders-view', loadChildren: './orders/orders-view/orders-view.module#OrdersViewModule' },
            { path: 'orders-form', loadChildren: './orders/orders-form/orders-form.module#OrdersFormModule' },

            { path: 'users-view', loadChildren: './users/users-view/users-view.module#UsersViewModule' },
            { path: 'users-form', loadChildren: './users/users-form/users-form.module#UsersFormModule' },

            { path: 'user-levels-view', loadChildren: './user-levels/user-levels-view/user-levels-view.module#UserLevelsViewModule' },
            { path: 'user-levels-form', loadChildren: './user-levels/user-levels-form/user-levels-form.module#UserLevelsFormModule' },

            { path: 'components-list-view', loadChildren: './components-list/components-list-view/components-list-view.module#ComponentsListViewModule' },
            { path: 'components-list-form', loadChildren: './components-list/components-list-form/components-list-form.module#ComponentsListFormModule' },

            { path: 'components-grouping', loadChildren: './components-group/components-group.module#ComponentsGroupModule' },
            { path: 'set-permissions', loadChildren: './user-level-permission/user-level-permission.module#UserLevelPermissionModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
