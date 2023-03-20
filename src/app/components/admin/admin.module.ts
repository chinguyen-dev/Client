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
import { AddCategoryAdminComponent } from './category-admin/add-category-admin/add-category-admin.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import { ListCategoryAdminComponent } from './category-admin/list-category-admin/list-category-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateCategoryAdminComponent } from './category-admin/update-category-admin/update-category-admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryAdminComponent,
    AddCategoryAdminComponent,
    ListCategoryAdminComponent,
    UpdateCategoryAdminComponent
  ],
  imports: [
    CommonModule,
    CategoryAdminRoutingModule,
    RouterModule.forChild(adminRoutes),
    MdbTableModule,
    MdbFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule {
}
