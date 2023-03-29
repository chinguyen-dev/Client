import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {clientRoutes} from "./client.routes";
import { ProductComponent } from './home/product-slider/product/product.component';
import { FilterBarComponent } from './shop/filter-bar/filter-bar.component';

@NgModule({
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(clientRoutes)
    ]
})
export class ClientModule {
}
