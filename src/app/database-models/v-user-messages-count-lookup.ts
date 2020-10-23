import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUserMessagesCountLookups')
export class vUserMessagesCountLookup {
    constructor(vUserMessagesCountLookup?: vUserMessagesCountLookup )  {
        let properties = [ "isUserRead", "userId",];
        for (let property of properties)
            if (vUserMessagesCountLookup && (vUserMessagesCountLookup[property] || vUserMessagesCountLookup[property] == 0))
                this[property] = vUserMessagesCountLookup[property];
    }
 
	@property('IsUserRead')
	isUserRead : number =   undefined;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;



}
