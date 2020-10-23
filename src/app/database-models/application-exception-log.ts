import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('ApplicationExceptionLogs')
export class ApplicationExceptionLog {
    constructor(applicationExceptionLog?: ApplicationExceptionLog )  {
        let properties = [ "applicationExceptionLogId", "applicationModuleId", "applicationTimeZoneId", "exceptionDate", "exceptionSource", "exceptionType", "innerException", "message", "requestMethod", "stackTrace", "url", "userId",];
        for (let property of properties)
            if (applicationExceptionLog && (applicationExceptionLog[property] || applicationExceptionLog[property] == 0))
                this[property] = applicationExceptionLog[property];
    }
 
	@property('ApplicationExceptionLogId')
	applicationExceptionLogId : number =   0 ;
 
	@property('ApplicationModuleId')
	applicationModuleId : number =   undefined;
 
	@property('ApplicationTimeZoneId')
	applicationTimeZoneId : number =   undefined;
 
    @required()
	@property('ExceptionDate')
	exceptionDate : Date =   undefined;
 
    @required()
	@property('ExceptionSource')
	exceptionSource : string = undefined ;
 
    @required()
	@property('ExceptionType')
	exceptionType : string = undefined ;
 
    @required()
	@property('InnerException')
	innerException : string = undefined ;
 
    @required()
	@property('Message')
	message : string = undefined ;
 
    @maxLength(10)
	@property('RequestMethod')
	requestMethod : string = undefined ;
 
    @required()
	@property('StackTrace')
	stackTrace : string = undefined ;
 
    @required()
    @maxLength(200)
	@property('Url')
	url : string = undefined ;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;



}
