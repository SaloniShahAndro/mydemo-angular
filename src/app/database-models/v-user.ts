import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUsers')
export class vUser {
    constructor(vUser?: vUser )  {
        let properties = [ "alias", "createdBy", "createdOn", "description", "dob", "emailId", "ethnicity", "firstName", "gender", "lastName", "middleName", "notifyEmail", "orderCompletedOn", "orderedOn", "orderStatus", "reportUrl", "roleId", "statusId", "userAddress", "userEducations", "userId", "userName", "userPhonenumber",];
        for (let property of properties)
            if (vUser && (vUser[property] || vUser[property] == 0))
                this[property] = vUser[property];
    }
 
    @maxLength(50)
	@property('Alias')
	alias : string = undefined ;
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
    @maxLength(500)
	@property('Description')
	description : string = undefined ;
 
    @maxLength(30)
	@property('Dob')
	dob : string = undefined ;
 
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
 
    @required()
    @maxLength(100)
	@property('LastName')
	lastName : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('MiddleName')
	middleName : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('NotifyEmail')
	notifyEmail : string = undefined ;
 
    @maxLength(30)
	@property('OrderCompletedOn')
	orderCompletedOn : string = undefined ;
 
    @maxLength(30)
	@property('OrderedOn')
	orderedOn : string = undefined ;
 
	@property('OrderStatus')
	orderStatus : number =   undefined;
 
    @maxLength(500)
	@property('ReportUrl')
	reportUrl : string = undefined ;
 
    @range(1,2147483647)
	@property('RoleId')
	roleId : number =   undefined;
 
    @range(1,2147483647)
	@property('StatusId')
	statusId : number =   undefined;
 
	@property('UserAddress')
	userAddress : string = undefined ;
 
	@property('UserEducations')
	userEducations : string = undefined ;
 
	@property('UserId')
	userId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('UserName')
	userName : string = undefined ;
 
	@property('UserPhonenumber')
	userPhonenumber : string = undefined ;



}
