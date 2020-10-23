import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { User } from './user'; @table('UserPhoneNumbers')
export class UserPhoneNumber {
    constructor(userPhoneNumber?: UserPhoneNumber )  {
        let properties = [ "createdBy", "createdOn", "modifiedBy", "modifiedOn", "phoneNumber", "userPhoneNumberId", "phoneTypeId", "userId",];
        for (let property of properties)
            if (userPhoneNumber && (userPhoneNumber[property] || userPhoneNumber[property] == 0))
                this[property] = userPhoneNumber[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @maxLength(15)
	@property('PhoneNumber')
	phoneNumber : string = undefined ;
 
	@property('UserPhoneNumberId')
	userPhoneNumberId : number =   0 ;
 
	@property('PhoneTypeId')
	phoneTypeId : number =   undefined;
 
    @range(0,2147483647)
	@property('UserId')
	userId : number =   undefined;
	user : User  ;



}
