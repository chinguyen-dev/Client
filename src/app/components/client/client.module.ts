import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {clientRoutes} from "./client.routes";
import { ProductComponent } from './home/product-slider/product/product.component';
import { FilterBarComponent } from './shop/filter-bar/filter-bar.component';
import { MegaMenuHeaderComponent } from './header/mega-menu-header/mega-menu-header.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
    declarations: [
        ProductComponent,
        MegaMenuHeaderComponent,
        CheckoutComponent
    ],
  exports: [
    ProductComponent,
    MegaMenuHeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(clientRoutes)
    ]
})
export class ClientModule {
}
