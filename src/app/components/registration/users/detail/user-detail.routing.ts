import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-detail.component'

const USER_DETAIL_ROUTES: Routes = [{
    path: '', component: UserDetailComponent
}];

export const USER_DETAIL_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_DETAIL_ROUTES);