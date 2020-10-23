import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { Role } from './role';import { UserEducation } from './user-education';import { UserAddress } from './user-address';import { UserCardDetail } from './user-card-detail';import { UserOrder } from './user-order';import { UserEmployment } from './user-employment';import { UserPhoneNumber } from './user-phone-number'; @table('Users')
export class User {
    constructor(user?: User )  {
        let properties = [ "alias", "applicationTimeZoneId", "createdBy", "createdOn", "description", "dob", "emailId", "ethnicity", "firstName", "gender", "isFirstTimeLogin", "languageId", "lastName", "loginBlocked", "middleName", "modifiedBy", "modifiedOn", "notifyEmail", "password", "passwordUpdationDateTime", "paymentCode", "salt", "statusId", "userId", "userName", "userProfilePhotoUrl", "verificationCode", "roleId", "userEducations", "userAddresses", "userCardDetails", "userOrders", "userEmployments", "userPhoneNumbers", "userPassword", "confirmPassword", "changePasswordMessage",];
        for (let property of properties)
            if (user && (user[property] || user[property] == 0))
                this[property] = user[property];
    }
 
    @maxLength(50)
	@property('Alias')
	alias : string = undefined ;
 
    @range(1,2147483647)
	@property('ApplicationTimeZoneId')
	applicationTimeZoneId : number =   undefined;
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
    @maxLength(500)
	@property('Description')
	description : string = undefined ;
 
	@property('Dob')
	dob : Date =   undefined;
 
    @required()
    @maxLength(100)
@email()
	@property('EmailId')
	emailId : string = undefined ;
 
    @maxLength(50)
	@property('Ethnicity')
	ethnicity : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('FirstName')
	firstName : string = undefined ;
 
    @required()
	@property('Gender')
	gender : any =   undefined;
 
	@property('IsFirstTimeLogin')
	isFirstTimeLogin : boolean = false ;
 
	@property('LanguageId')
	languageId : number =   undefined;
 
    @required()
    @maxLength(100)
	@property('LastName')
	lastName : string = undefined ;
 
	@property('LoginBlocked')
	loginBlocked : boolean = false ;
 
    @required()
    @maxLength(100)
	@property('MiddleName')
	middleName : string = undefined ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @required()
    @maxLength(100)
	@property('NotifyEmail')
	notifyEmail : string = undefined ;
 
    @maxLength(132)
	@property('Password')
	password : any =   undefined;
 
	@property('PasswordUpdationDateTime')
	passwordUpdationDateTime : Date =   undefined;
 
    @maxLength(100)
	@property('PaymentCode')
	paymentCode : string = undefined ;
 
    @maxLength(140)
	@property('Salt')
	salt : any =   undefined;
 
    @range(1,2147483647)
	@property('StatusId')
	statusId : number =   undefined;
 
	@property('UserId')
	userId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('UserName')
	userName : string = undefined ;
 
    @maxLength(100)
	@property('UserProfilePhotoUrl')
	userProfilePhotoUrl : string = undefined ;
 
    @maxLength(100)
	@property('VerificationCode')
	verificationCode : string = undefined ;
 
    @range(0,2147483647)
	@property('RoleId')
	roleId : number =   undefined;
	role : Role  ;
	@nested(UserEducation)
	userEducations: UserEducation[];

	@nested(UserAddress)
	userAddresses: UserAddress[];

	@nested(UserCardDetail)
	userCardDetails: UserCardDetail[];

	@nested(UserOrder)
	userOrders: UserOrder[];

	@nested(UserEmployment)
	userEmployments: UserEmployment[];

	@nested(UserPhoneNumber)
	userPhoneNumbers: UserPhoneNumber[];



	@required()
	@pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{6,25}')
	userPassword : string =   undefined;
	confirmPassword : string =   undefined;
	changePasswordMessage : string =   undefined;

}
