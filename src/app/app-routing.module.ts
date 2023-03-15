import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as path from "path";
import {AdminComponent} from "./components/admin/admin.component";


const routes: Routes = [
  {path:'admin' , component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
