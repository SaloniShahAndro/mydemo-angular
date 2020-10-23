import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxFormsModule } from "@rx/forms";
import { RxViewModule } from "@rx/view";
import { RxTableModule } from "@rx/table";
import { DASHBOARD_ADD_ROUTING } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { UsersSharedComponentModule } from '../registration/users/users-shared-component.module';
import { UserViewComponent } from '../registration/users/view/user-view.component';
import { UserOrdersSharedComponentModule } from '../registration/user-orders/user-orders-shared-component.module';



@NgModule({
  imports: [
    DASHBOARD_ADD_ROUTING,
    CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,UsersSharedComponentModule,UserOrdersSharedComponentModule
    
  ],
  declarations: [DashboardComponent],
  exports: [RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
