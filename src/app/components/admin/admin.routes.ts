import {Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SidebarComponent} from "./sidebar/sidebar.component";

export const adminRoutes : Routes = [
      {path: '', component: DashboardComponent},
      {path: 'sidebar', component: SidebarComponent},
]
