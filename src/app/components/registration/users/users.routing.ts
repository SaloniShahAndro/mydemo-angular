import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { PageAccess } from 'src/app/domain/authorization';
//import { PageAccess } from "app/domain/authorization";

const USERS_ROUTES: Routes = [
	{
    path: 'add', 
	loadChildren: './add/user-add.module#UserAddModule',
	canActivate: [PageAccess],
    data: { rootModuleId: 33,pageName:'users', applicationModuleId: 5, accessItem: 'add',  keyName: 'userId', compositeKeys:[] }
	},
	{
		path: ':userId', 
		loadChildren: './edit/user-edit.module#UserEditModule',
		canActivate: [PageAccess],
		data: { rootModuleId: 33,pageName:'users', applicationModuleId: 5, accessItem: 'edit', keyName: 'userId', compositeKeys:[] }
		},
		{
			path: 'detail/:userId', 
			loadChildren: './detail/user-detail.module#UserDetailModule',
			canActivate: [PageAccess],
			data: { rootModuleId: 33,pageName:'users', applicationModuleId: 5, accessItem: 'edit',  keyName: 'userId', compositeKeys:[] }
		},
		{
			path: 'info/:userId', 
			loadChildren: './info/user-info.module#UserInfoModule',
			canActivate: [PageAccess],
			data: { rootModuleId: 33,pageName:'users', applicationModuleId: 5, accessItem: 'edit',  keyName: 'userId', compositeKeys:[] }
		},

];

export const USERS_ROUTING: ModuleWithProviders = RouterModule.forChild(USERS_ROUTES);
