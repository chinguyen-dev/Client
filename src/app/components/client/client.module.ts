import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {clientRoutes} from "./client.routes";
import { ProductComponent } from './home/product-slider/product/product.component';
import { MegaMenuHeaderComponent } from './header/mega-menu-header/mega-menu-header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ProductComponent,
        MegaMenuHeaderComponent,
    ],
  exports: [
    ProductComponent,
    MegaMenuHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
    FormsModule
  ]
})
export class ClientModule {
}
