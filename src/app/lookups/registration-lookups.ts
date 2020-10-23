import { LookupAction } from '@rx/http'

export class RegistrationLookups {
    static adminStatusCountLookups: LookupAction = {
        controllerName: "registration",
        actionName: "adminStatusCountLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

    static statesLookups: LookupAction = {
        controllerName: "registration",
        actionName: "statesLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

    static stripeTransactionsLookups: LookupAction = {
        controllerName: "registration",
        actionName: "stripeTransactionsLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

    static userEmailLookups: LookupAction = {
        controllerName: "registration",
        actionName: "userEmailLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

    static userNameLookups: LookupAction = {
        controllerName: "registration",
        actionName: "userNameLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

    static userOrderLookups: LookupAction = {
        controllerName: "registration",
        actionName: "userOrderLookups",
		cacheOption: {
            isVersionBase: true,
            tableName:''
        }
    };

}
