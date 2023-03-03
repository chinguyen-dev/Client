import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./client.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "../login/login.component";
import {ProductDetailsComponent} from "./shop/product-list/product-item/product-details/product-details.component";
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [

  {
    path: '', component: ClientComponent,
    // children: [
    //   {path: '', component: ShopComponent},
    //   {path: 'cart', component: CartComponent},
    //   {path: 'login', component: LoginComponent},
    //   {path: 'product', component: ProductDetailsComponent}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
