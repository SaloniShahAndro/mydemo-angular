import { LookupAction } from '@rx/http'

export class UserMessageLookups {
    static adminMessagesCountLookups: LookupAction = {
        controllerName: "usermessage",
        actionName: "adminMessagesCountLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

    static userMessagesCountLookups: LookupAction = {
        controllerName: "usermessage",
        actionName: "userMessagesCountLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

}
