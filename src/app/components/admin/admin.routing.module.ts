import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [

  {
    path: 'admin',component: AdminComponent,
    children: [

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, SidebarComponent],
  declarations: [
    SidebarComponent
  ]
})
export class ClientRoutingModule {
}
