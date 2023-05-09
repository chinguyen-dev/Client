import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListProductAdminComponent} from "./list-product-admin/list-product-admin.component";
import {ProductAdminComponent} from "./product-admin.component";
import {AddProductAdminComponent} from "./add-product-admin/add-product-admin.component";

export const productAdminRoutes: Routes = [
  {
    path: '', component: ProductAdminComponent,
    children: [
      {
        path: '', component: ListProductAdminComponent,
      },
      {
        path: 'create', component: AddProductAdminComponent,
      }
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productAdminRoutes),
  ]
})
export class ProductAdminRoutingModule {
}
