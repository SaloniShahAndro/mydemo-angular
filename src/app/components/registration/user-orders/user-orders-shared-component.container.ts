import {ComponentContainer} from "@rx/core"
import { UserOrderViewComponent } from './view/user-order-view.component'
import { UserOrderDetailComponent } from './detail/user-order-detail.component'

export const USER_ORDERS_SHARED_COMPONENT_CONTAINER: ComponentContainer[] = [
	{
    component: UserOrderViewComponent,
    accessItem: 'view',
    applicationModuleId: 5,
	keyName: 'orderId',
	childModuleName :  'userorders'  ,
	pageName:'user-orders',
	rootModuleId:33
	},
	{
    component: UserOrderDetailComponent,
    accessItem: 'detail',
    applicationModuleId: 5,
	keyName: 'orderId',
	childModuleName :  'userorders'  ,
	pageName:'user-orders',
	rootModuleId:33
	},
];

