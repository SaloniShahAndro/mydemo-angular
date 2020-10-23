import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('UserMessages')
export class UserMessage {
    constructor(userMessage?: UserMessage )  {
        let properties = [ "createdBy", "createdOn", "isAdminRead", "isUserRead", "message", "modifiedBy", "modifiedOn", "userId", "userMessageId", "userType",];
        for (let property of properties)
            if (userMessage && (userMessage[property] || userMessage[property] == 0))
                this[property] = userMessage[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
	@property('IsAdminRead')
	isAdminRead : boolean = false ;
 
	@property('IsUserRead')
	isUserRead : boolean = false ;
 
    @required()
    @maxLength(1000)
	@property('Message')
	message : string = undefined ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;
 
	@property('UserMessageId')
	userMessageId : number =   0 ;
 
    @range(1,2147483647)
	@property('UserType')
	userType : number =   undefined;



}
