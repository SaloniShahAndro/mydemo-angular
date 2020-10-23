import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vAdminMessagesCountLookups')
export class vAdminMessagesCountLookup {
    constructor(vAdminMessagesCountLookup?: vAdminMessagesCountLookup )  {
        let properties = [ "totalCount",];
        for (let property of properties)
            if (vAdminMessagesCountLookup && (vAdminMessagesCountLookup[property] || vAdminMessagesCountLookup[property] == 0))
                this[property] = vAdminMessagesCountLookup[property];
    }
 
	@property('TotalCount')
	totalCount : number =   undefined;



}
