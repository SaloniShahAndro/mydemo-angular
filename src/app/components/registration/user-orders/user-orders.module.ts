import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';


import { USER_ORDERS_ROUTING } from './user-orders.routing';
import { UserOrdersService } from './user-orders.service';

@NgModule({
    imports: [USER_ORDERS_ROUTING],
    exports: [RouterModule],
    providers: [UserOrdersService]
})
export class UserOrdersModule { }