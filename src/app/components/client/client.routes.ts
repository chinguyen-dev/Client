import {Routes} from "@angular/router";
import {ClientComponent} from "./client.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {ProductDetailsComponent} from "./shop/product-list/product-item/product-details/product-details.component";
import {ShopComponent} from "./shop/shop.component";
import {CheckoutComponent} from "./checkout/checkout.component";

export const clientRoutes : Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'cart', component: CartComponent},
      {path: 'account/login', component: LoginComponent},
      {path: 'account/register', component: RegisterComponent},
      {path: 'product/:id', component: ProductDetailsComponent},
      {path: ':slug', component: ShopComponent},
      {path: 'checkout', component: CheckoutComponent}
    ]
  }
]
