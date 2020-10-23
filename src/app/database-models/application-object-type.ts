import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('ApplicationObjectTypes')
export class ApplicationObjectType {
    constructor(applicationObjectType?: ApplicationObjectType )  {
        let properties = [ "applicationObjectTypeId", "applicationObjectTypeName",];
        for (let property of properties)
            if (applicationObjectType && (applicationObjectType[property] || applicationObjectType[property] == 0))
                this[property] = applicationObjectType[property];
    }
 
	@property('ApplicationObjectTypeId')
	applicationObjectTypeId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('ApplicationObjectTypeName')
	applicationObjectTypeName : string = undefined ;



}
