import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('test')
export class test {
    constructor(test?: test )  {
        let properties = [ "alias", "applicationTimeZoneId", "createdBy", "createdOn", "description", "dOB", "emailId", "ethnicity", "firstName", "gender", "isFirstTimeLogin", "languageId", "lastName", "loginBlocked", "middleName", "modifiedBy", "modifiedOn", "password", "passwordUpdationDateTime", "roleId", "salt", "statusId", "userId", "userProfilePhotoUrl", "verificationCode",];
        for (let property of properties)
            if (test && (test[property] || test[property] == 0))
                this[property] = test[property];
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
 
	@property('DOB')
	dOB : Date =   undefined;
 
    @required()
    @maxLength(100)
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
 
    @maxLength(132)
	@property('Password')
	password : any =   undefined;
 
	@property('PasswordUpdationDateTime')
	passwordUpdationDateTime : Date =   undefined;
 
    @range(1,2147483647)
	@property('RoleId')
	roleId : number =   undefined;
 
    @maxLength(140)
	@property('Salt')
	salt : any =   undefined;
 
    @range(1,2147483647)
	@property('StatusId')
	statusId : number =   undefined;
 
	@property('UserId')
	userId : number =   0 ;
 
    @maxLength(100)
	@property('UserProfilePhotoUrl')
	userProfilePhotoUrl : string = undefined ;
 
    @maxLength(100)
	@property('VerificationCode')
	verificationCode : string = undefined ;



}
