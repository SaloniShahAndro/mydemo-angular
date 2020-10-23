import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUserEmailLookups')
export class vUserEmailLookup {
    constructor(vUserEmailLookup?: vUserEmailLookup )  {
        let properties = [ "emailId", "userId",];
        for (let property of properties)
            if (vUserEmailLookup && (vUserEmailLookup[property] || vUserEmailLookup[property] == 0))
                this[property] = vUserEmailLookup[property];
    }
 
    @required()
    @maxLength(100)
	@property('EmailId')
	emailId : string = undefined ;
 
	@property('UserId')
	userId : number =   0 ;



}
