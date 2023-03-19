import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryAdminComponent} from "./category-admin.component";
import {AddCategoryAdminComponent} from "./add-category-admin/add-category-admin.component";
import {ListCategoryAdminComponent} from "./list-category-admin/list-category-admin.component";

export const categoryAdminRoutes: Routes = [
  {
    path: '', component: CategoryAdminComponent,
    children: [
      {path: '', component: ListCategoryAdminComponent},
      {path: 'create', component: AddCategoryAdminComponent}
    ]
  }
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
