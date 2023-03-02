import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {log} from "util";
import {LoginComponent} from "./components/login/login.component";
import {ClientComponent} from "./components/client/client.component";


const routes: Routes = [
  {
    path: '',  component: ClientComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
