import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vAdminMessageCountLookups')
export class vAdminMessageCountLookup {
    constructor(vAdminMessageCountLookup?: vAdminMessageCountLookup )  {
        let properties = [ "totalCount",];
        for (let property of properties)
            if (vAdminMessageCountLookup && (vAdminMessageCountLookup[property] || vAdminMessageCountLookup[property] == 0))
                this[property] = vAdminMessageCountLookup[property];
    }
 
	@property('TotalCount')
	totalCount : number =   undefined;



}
