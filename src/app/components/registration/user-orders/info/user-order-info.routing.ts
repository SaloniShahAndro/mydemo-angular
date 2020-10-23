import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserOrderInfoComponent } from './user-order-info.component'

const USER_ORDER_INFO_ROUTES: Routes = [{
    path: '', component: UserOrderInfoComponent
}];

export const USER_ORDER_INFO_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_ORDER_INFO_ROUTES);