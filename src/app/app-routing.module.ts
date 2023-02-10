import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {AdminComponent} from "./components/admin/admin.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";

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
