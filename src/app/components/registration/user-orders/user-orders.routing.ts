import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { PageAccess } from "src/app/domain/authorization";

const USER_ORDERS_ROUTES: Routes = [
	{
    path: '', 
	loadChildren: './list/user-order-list.module#UserOrderListModule',
	canActivate: [PageAccess],
    data: { rootModuleId: 33,pageName:'user-orders', applicationModuleId: 5, accessItem: 'list',  keyName: 'orderId', compositeKeys:[] }
	},
	{
    path: 'info', 
	loadChildren: './info/user-order-info.module#UserOrderInfoModule',
	canActivate: [PageAccess],
    data: { rootModuleId: 33,pageName:'user-orders', applicationModuleId: 5, accessItem: 'list',  keyName: 'orderId', compositeKeys:[] }
	},
	{
    path: 'add', 
	loadChildren: './add/user-order-add.module#UserOrderAddModule',
	canActivate: [PageAccess],
    data: { rootModuleId: 33,pageName:'user-orders', applicationModuleId: 5, accessItem: 'add',  keyName: 'orderId', compositeKeys:[] }
	},
];

export const USER_ORDERS_ROUTING: ModuleWithProviders = RouterModule.forChild(USER_ORDERS_ROUTES);
