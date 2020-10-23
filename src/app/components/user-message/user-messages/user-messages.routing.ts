import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { PageAccess } from "src/app/domain/authorization";

const USER_MESSAGES_ROUTES: Routes = [
	{
    path: '', 
	loadChildren: './list/user-message-list.module#UserMessageListModule',
	canActivate: [PageAccess],
    data: { rootModuleId: 33,pageName:'user-messages', applicationModuleId: 7, accessItem: 'list',  keyName: 'userMessageId', compositeKeys:[] }
	},
	
	{
		path: 'search', 
		loadChildren: './search/user-message-search.module#UserMessageSearchModule',
		canActivate: [PageAccess],
		data: { rootModuleId: 33,pageName:'user-messages', applicationModuleId: 7, accessItem: 'list',  keyName: 'userMessageId', compositeKeys:[] }
		},
		{
			path: ':clientId', 
			loadChildren: './list/user-message-list.module#UserMessageListModule',
			canActivate: [PageAccess],
			data: { rootModuleId: 33,pageName:'user-messages', applicationModuleId: 7, accessItem: 'list',  keyName: 'userMessageId', compositeKeys:[] }
			},
];

export const USER_MESSAGES_ROUTING: ModuleWithProviders = RouterModule.forChild(USER_MESSAGES_ROUTES);
