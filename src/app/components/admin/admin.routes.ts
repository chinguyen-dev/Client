import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminComponent} from "./admin.component";
import {GuardGuard} from "../../guard.guard";

export const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent},
      {
        path: 'categories',
        loadChildren: () => import('./category-admin/category-admin-routing.module').then(m => m.CategoryAdminRoutingModule)
      }
    ],
    canActivate: [GuardGuard]
  },
]
