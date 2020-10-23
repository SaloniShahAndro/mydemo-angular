import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserInfoComponent } from './user-info.component'

const USER_INFO_ROUTES: Routes = [{
    path: '', component: UserInfoComponent
}];

export const USER_INFO_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_INFO_ROUTES);