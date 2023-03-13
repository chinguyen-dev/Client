import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {AdminComponent} from "./components/admin/admin.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {CartComponent} from "./components/client/cart/cart.component";
import {LoginComponent} from "./components/login/login.component";
import {
  ProductDetailsComponent
} from "./components/client/shop/product-list/product-item/product-details/product-details.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/client/home/home.component";
import {ShopComponent} from "./components/client/shop/shop.component";

const routes: Routes = [
  {
    path: "admin", component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },
  {
    path: "", component: ClientComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'cart', component: CartComponent},
      {path: 'account/login', component: LoginComponent},
      {path: 'account/register', component: RegisterComponent},
      {path: 'product', component: ProductDetailsComponent},
      {path: 'shop', component: ShopComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
