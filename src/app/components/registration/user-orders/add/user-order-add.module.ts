import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserOrderAddComponent } from './user-order-add.component'
import { USER_ORDER_ADD_ROUTING } from './user-order-add.routing'
import {UserOrdersService } from "../user-orders.service";
import { UserOrdersSharedComponentModule } from 'src/app/components/registration/user-orders/user-orders-shared-component.module'

@NgModule({
    imports: [
        USER_ORDER_ADD_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,
		UserOrdersSharedComponentModule,     ],
    declarations: [UserOrderAddComponent ],
    exports: [RouterModule],
    providers: [UserOrdersService]
})
export class UserOrderAddModule { }