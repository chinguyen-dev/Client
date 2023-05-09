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
import {AddCategoryAdminComponent} from './category-admin/add-category-admin/add-category-admin.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {ListCategoryAdminComponent} from './category-admin/list-category-admin/list-category-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateCategoryAdminComponent} from './category-admin/update-category-admin/update-category-admin.component';
import {ProductAdminComponent} from './product-admin/product-admin.component';
import {LabelAdminComponent} from './label-admin/label-admin.component';
import {ListProductAdminComponent} from './product-admin/list-product-admin/list-product-admin.component';
import {AddProductAdminComponent} from './product-admin/add-product-admin/add-product-admin.component';
import {HttpClientModule} from '@angular/common/http';
import {MdbWysiwygModule} from "mdb-angular-wysiwyg";
import {MdbSelectModule} from "mdb-angular-ui-kit/select";
import {MdbTabsModule} from "mdb-angular-ui-kit/tabs";
import {MdbFileUploadModule} from "mdb-angular-file-upload";

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryAdminComponent,
    AddCategoryAdminComponent,
    ListCategoryAdminComponent,
    UpdateCategoryAdminComponent,
    ProductAdminComponent,
    LabelAdminComponent,
    ListProductAdminComponent,
    AddProductAdminComponent
  ],
    imports: [
        CommonModule,
        CategoryAdminRoutingModule,
        RouterModule.forChild(adminRoutes),
        MdbTableModule,
        MdbFormsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MdbWysiwygModule,
        MdbSelectModule,
        MdbTabsModule,
        MdbFileUploadModule,
    ]
})
export class AdminModule {
}
