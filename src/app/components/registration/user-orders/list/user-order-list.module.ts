import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserOrderListComponent } from './user-order-list.component'
import { USER_ORDER_LIST_ROUTING } from './user-order-list.routing'
import {UserOrdersService } from "../user-orders.service";

@NgModule({
    imports: [
        USER_ORDER_LIST_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,
		    ],
    declarations: [UserOrderListComponent ],
    exports: [RouterModule],
    providers: [UserOrdersService]
})
export class UserOrderListModule { }