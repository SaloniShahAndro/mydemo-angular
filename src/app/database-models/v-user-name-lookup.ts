import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUserNameLookups')
export class vUserNameLookup {
    constructor(vUserNameLookup?: vUserNameLookup )  {
        let properties = [ "userId", "userName",];
        for (let property of properties)
            if (vUserNameLookup && (vUserNameLookup[property] || vUserNameLookup[property] == 0))
                this[property] = vUserNameLookup[property];
    }
 
	@property('UserId')
	userId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('UserName')
	userName : string = undefined ;



}
