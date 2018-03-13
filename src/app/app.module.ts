//import { AgmCoreModule } from 'angular2-google-maps/core';
import { ComponentGroupService } from './layout/components-group/components-group.service';
import { ComponentService } from './layout/components-list/component.service';
import { UsersCrudService } from './layout/users/users-crud.service';
import { UserLevelService } from './layout/user-levels/user-levels.service';
import { OrderService } from './layout/orders/order.service';
import { FooddetailService } from './layout/food/food-detail/fooddetail.service';
import { FoodtypeService } from './layout/food/food-types/foodtype.service';
import { OutletService } from './layout/outlets/outlets.service';
import { RiderService } from './layout/rider/rider.service';
import { DataTableModule } from 'angular5-data-table';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { environment } from './../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



// const googleMapsCore = AgmCoreModule.forRoot({
//     apiKey : 'AIzaSyDHvITRcjLl9JrObz3SIBTgGNl9rTijVr8',
//   });



@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DataTableModule,
        AngularMultiSelectModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        RiderService,
        OutletService,
        FoodtypeService,
        FooddetailService,
        OrderService,
        UserLevelService,
        UsersCrudService,
        ComponentService,
        ComponentGroupService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
