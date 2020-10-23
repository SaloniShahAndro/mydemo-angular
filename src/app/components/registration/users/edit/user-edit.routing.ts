import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserEditComponent } from './user-edit.component'

const USER_EDIT_ROUTES: Routes = [{
    path: '', component: UserEditComponent
}];

export const USER_EDIT_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_EDIT_ROUTES);