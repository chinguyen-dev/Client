import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as path from "path";
import {AdminComponent} from "./components/admin/admin.component";
import {GuardGuard} from "./guard.guard";


const routes: Routes = [
  {path:'admin' , component: AdminComponent, canActivate: [GuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
