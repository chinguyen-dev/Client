import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryAdminComponent} from "./category-admin.component";

export const categoryAdminRoutes: Routes = [
  {path: '', component: CategoryAdminComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryAdminRoutes)
  ]
})
export class CategoryAdminRoutingModule {
}
