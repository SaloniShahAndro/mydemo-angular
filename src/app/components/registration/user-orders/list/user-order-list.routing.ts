import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserOrderListComponent } from './user-order-list.component'

const USER_ORDER_LIST_ROUTES: Routes = [{
    path: '', component: UserOrderListComponent
}];

export const USER_ORDER_LIST_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_ORDER_LIST_ROUTES);