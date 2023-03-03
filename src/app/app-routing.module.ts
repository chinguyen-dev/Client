import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {log} from "util";
import {LoginComponent} from "./components/login/login.component";
import {ClientComponent} from "./components/client/client.component";
const routes: Routes = [
  {
    path: '',  component: ClientComponent,

import {AdminComponent} from "./components/admin/admin.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
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
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
