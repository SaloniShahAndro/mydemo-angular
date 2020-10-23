import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './user-add.component'

const USER_ADD_ROUTES: Routes = [{
    path: '', component: UserAddComponent
}];

export const USER_ADD_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_ADD_ROUTES);