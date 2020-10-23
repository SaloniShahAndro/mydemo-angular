import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUserMessages')
export class vUserMessage {
    constructor(vUserMessage?: vUserMessage )  {
        let properties = [ "createdOn", "message", "userId", "userName", "userType",];
        for (let property of properties)
            if (vUserMessage && (vUserMessage[property] || vUserMessage[property] == 0))
                this[property] = vUserMessage[property];
    }
 
    @maxLength(30)
	@property('CreatedOn')
	createdOn : string = undefined ;
 
    @required()
    @maxLength(1000)
	@property('Message')
	message : string = undefined ;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;
 
    @required()
    @maxLength(201)
	@property('UserName')
	userName : string = undefined ;
 
    @range(1,2147483647)
	@property('UserType')
	userType : number =   undefined;



}
