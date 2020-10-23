import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserOrderAddComponent } from './user-order-add.component'

const USER_ORDER_ADD_ROUTES: Routes = [{
    path: '', component: UserOrderAddComponent
}];

export const USER_ORDER_ADD_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_ORDER_ADD_ROUTES);