import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vMessageCountLookups')
export class vMessageCountLookup {
    constructor(vMessageCountLookup?: vMessageCountLookup )  {
        let properties = [ "isAdminRead", "isUserRead", "userId",];
        for (let property of properties)
            if (vMessageCountLookup && (vMessageCountLookup[property] || vMessageCountLookup[property] == 0))
                this[property] = vMessageCountLookup[property];
    }
 
	@property('IsAdminRead')
	isAdminRead : number =   undefined;
 
	@property('IsUserRead')
	isUserRead : number =   undefined;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;



}
