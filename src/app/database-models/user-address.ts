import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { User } from './user'; @table('UserAddresses')
export class UserAddress {
    constructor(userAddress?: UserAddress )  {
        let properties = [ "address", "city", "createdBy", "createdOn", "modifiedBy", "modifiedOn", "state", "userAddressId", "userAddressType", "zip", "userId",];
        for (let property of properties)
            if (userAddress && (userAddress[property] || userAddress[property] == 0))
                this[property] = userAddress[property];
    }
 
    @maxLength(200)
	@property('Address')
	address : string = undefined ;
 
    @maxLength(50)
@required()
	@property('City')
	city : string = undefined ;
 
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
 
    @maxLength(50)
@required()
	@property('State')
	state : string = undefined ;
 
	@property('UserAddressId')
	userAddressId : number =   0 ;
 
	@property('UserAddressType')
	userAddressType : number =   undefined;
 
    @maxLength(10)
	@property('Zip')
	zip : string = undefined ;
 
    @range(0,2147483647)
	@property('UserId')
	userId : number =   undefined;
	user : User  ;



}
