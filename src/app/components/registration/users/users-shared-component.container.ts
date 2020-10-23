import {ComponentContainer} from "@rx/core"
import { UserViewComponent } from './view/user-view.component'

export const USERS_SHARED_COMPONENT_CONTAINER: ComponentContainer[] = [
	{
    component: UserViewComponent,
    accessItem: 'view',
    applicationModuleId: 5,
	keyName: 'userId',
	childModuleName :   undefined  ,
	pageName:'users',
	rootModuleId:33
	},
];

