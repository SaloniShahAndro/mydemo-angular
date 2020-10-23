import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('ApplicationObjects')
export class ApplicationObject {
    constructor(applicationObject?: ApplicationObject )  {
        let properties = [ "applicationObjectId", "applicationObjectName", "applicationObjectTypeId",];
        for (let property of properties)
            if (applicationObject && (applicationObject[property] || applicationObject[property] == 0))
                this[property] = applicationObject[property];
    }
 
	@property('ApplicationObjectId')
	applicationObjectId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('ApplicationObjectName')
	applicationObjectName : string = undefined ;
 
    @range(1,2147483647)
	@property('ApplicationObjectTypeId')
	applicationObjectTypeId : number =   undefined;



}
