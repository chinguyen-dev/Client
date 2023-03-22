import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {clientRoutes} from "./client.routes";
import { FilterBarComponent } from './shop/filter-bar/filter-bar.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientModule {
}
