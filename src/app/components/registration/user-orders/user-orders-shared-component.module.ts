import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RxViewModule } from '@rx/view';
import {RxFormsModule } from '@rx/forms';
import {RxTableModule } from "@rx/table";
import {DynamicComponentContainer } from '@rx/core';

import { UserOrderViewComponent } from './view/user-order-view.component'
import { UserOrderDetailComponent } from './detail/user-order-detail.component'
import {UserOrdersService } from "./user-orders.service";
import {USER_ORDERS_SHARED_COMPONENT_CONTAINER } from './user-orders-shared-component.container';
@NgModule({
    imports: [
        RxViewModule, RxFormsModule,
        CommonModule, FormsModule, ReactiveFormsModule, RxTableModule
    ],
    declarations: [ UserOrderViewComponent,  UserOrderDetailComponent, ],
    providers: [UserOrdersService ],
    exports: [RouterModule, UserOrderViewComponent,  UserOrderDetailComponent, ]
})
export class UserOrdersSharedComponentModule { }
DynamicComponentContainer.register(USER_ORDERS_SHARED_COMPONENT_CONTAINER );