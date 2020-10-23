import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserOrderInfoComponent } from './user-order-info.component'
import { USER_ORDER_INFO_ROUTING } from './user-order-info.routing'
import {UserOrdersService } from "../user-orders.service";
import { UsersService } from '../../users/users.service';
import { UserOrdersSharedComponentModule } from '../user-orders-shared-component.module';

@NgModule({
    imports: [
        USER_ORDER_INFO_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,UserOrdersSharedComponentModule
		    ],
    declarations: [UserOrderInfoComponent ],
    exports: [RouterModule],
    providers: [UserOrdersService,UsersService]
})
export class UserOrderInfoModule { }