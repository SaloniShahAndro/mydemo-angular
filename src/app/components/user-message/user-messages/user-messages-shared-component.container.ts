import {ComponentContainer} from "@rx/core"
import { UserMessageAddComponent } from './add/user-message-add.component'

export const USER_MESSAGES_SHARED_COMPONENT_CONTAINER: ComponentContainer[] = [
	{
    component: UserMessageAddComponent,
    accessItem: 'add',
    applicationModuleId: 7,
	keyName: 'userMessageId',
	childModuleName :   undefined  ,
	pageName:'user-messages',
	rootModuleId:33
	},
];

