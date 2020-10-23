import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { User } from './user'; @table('UserCardDetails')
export class UserCardDetail {
    constructor(userCardDetail?: UserCardDetail )  {
        let properties = [ "address", "cardCode", "cardType", "city", "company", "country", "createdBy", "createdOn", "cvv", "emailId", "expirationDate", "firstName", "lastName", "modifiedBy", "modifiedOn", "phone", "state", "userCardDetailId", "zip", "userId",];
        for (let property of properties)
            if (userCardDetail && (userCardDetail[property] || userCardDetail[property] == 0))
                this[property] = userCardDetail[property];
    }
 
    @required()
    @maxLength(200)
	@property('Address')
	address : string = undefined ;
 
    @required()
    @maxLength(20)
	@property('CardCode')
	cardCode : string = undefined ;
 
    @required()
    @maxLength(25)
	@property('CardType')
	cardType : string = undefined ;
 
    @required()
    @maxLength(50)
	@property('City')
	city : string = undefined ;
 
    @maxLength(100)
	@property('Company')
	company : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('Country')
	country : string = undefined ;
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
    @required()
    @maxLength(4)
	@property('Cvv')
	cvv : string = undefined ;
 
    @required()
    @maxLength(100)
@email()
	@property('EmailId')
	emailId : string = undefined ;
 
    @required()
    @maxLength(12)
	@property('ExpirationDate')
	expirationDate : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('FirstName')
	firstName : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('LastName')
	lastName : string = undefined ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @required()
    @maxLength(15)
	@property('Phone')
	phone : string = undefined ;
 
    @required()
    @maxLength(50)
	@property('State')
	state : string = undefined ;
 
	@property('UserCardDetailId')
	userCardDetailId : number =   0 ;
 
    @required()
    @maxLength(10)
	@property('Zip')
	zip : string = undefined ;
 
    @range(0,2147483647)
	@property('UserId')
	userId : number =   undefined;
	user : User  ;



}
