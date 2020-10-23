import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUserMessageCountLookups')
export class vUserMessageCountLookup {
    constructor(vUserMessageCountLookup?: vUserMessageCountLookup )  {
        let properties = [ "isUserRead", "userid",];
        for (let property of properties)
            if (vUserMessageCountLookup && (vUserMessageCountLookup[property] || vUserMessageCountLookup[property] == 0))
                this[property] = vUserMessageCountLookup[property];
    }
 
	@property('IsUserRead')
	isUserRead : number =   undefined;
 
    @range(1,2147483647)
	@property('userid')
	userid : number =   undefined;



}
