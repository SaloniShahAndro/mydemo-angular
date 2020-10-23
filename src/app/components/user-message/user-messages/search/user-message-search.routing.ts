import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserMessageSearchComponent } from './user-message-search.component'

const USER_MESSAGE_SEARCH_ROUTES: Routes = [{
    path: '', component: UserMessageSearchComponent
}];

export const USER_MESSAGE_SEARCH_ROUTING : ModuleWithProviders = RouterModule.forChild(USER_MESSAGE_SEARCH_ROUTES);