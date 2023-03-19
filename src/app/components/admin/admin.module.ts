import {MdbTableModule} from "mdb-angular-ui-kit/table";
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.routes";
import {CategoryAdminRoutingModule} from "./category-admin/category-admin-routing.module";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CategoryAdminComponent} from "./category-admin/category-admin.component";
import {AdminComponent} from "./admin.component";

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryAdminComponent
  ],
  imports: [
    CommonModule,
    CategoryAdminRoutingModule,
    RouterModule.forChild(adminRoutes),
    MdbTableModule,
  ]
})
export class AdminModule {
}
