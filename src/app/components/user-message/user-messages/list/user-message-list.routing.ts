import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserMessageListComponent } from './user-message-list.component'

const USER_MESSAGE_LIST_ROUTES: Routes = [{
    path: '', component: UserMessageListComponent
}];

export const USER_MESSAGE_LIST_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_MESSAGE_LIST_ROUTES);