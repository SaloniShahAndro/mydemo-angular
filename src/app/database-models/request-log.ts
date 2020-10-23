import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('RequestLogs')
export class RequestLog {
    constructor(requestLog?: RequestLog )  {
        let properties = [ "applicationModuleId", "authorizationHeader", "browserName", "clientIPAddress", "contentLength", "cookies", "parameters", "recordId", "requestLogId", "requestMethod", "requestTime", "responseStatusCode", "serviceUri", "totalDuration", "userId",];
        for (let property of properties)
            if (requestLog && (requestLog[property] || requestLog[property] == 0))
                this[property] = requestLog[property];
    }
 
	@property('ApplicationModuleId')
	applicationModuleId : number =   undefined;
 
	@property('AuthorizationHeader')
	authorizationHeader : string = undefined ;
 
    @maxLength(200)
	@property('BrowserName')
	browserName : string = undefined ;
 
    @maxLength(50)
	@property('ClientIPAddress')
	clientIPAddress : string = undefined ;
 
	@property('ContentLength')
	contentLength : number =   undefined;
 
	@property('Cookies')
	cookies : string = undefined ;
 
    @required()
	@property('Parameters')
	parameters : string = undefined ;
 
    @maxLength(100)
	@property('RecordId')
	recordId : string = undefined ;
 
	@property('RequestLogId')
	requestLogId : number =   0 ;
 
    @required()
    @maxLength(10)
	@property('RequestMethod')
	requestMethod : string = undefined ;
 
    @required()
	@property('RequestTime')
	requestTime : Date =   undefined;
 
    @range(1,2147483647)
	@property('ResponseStatusCode')
	responseStatusCode : number =   undefined;
 
    @required()
    @maxLength(100)
	@property('ServiceUri')
	serviceUri : string = undefined ;
 
    @required()
	@property('TotalDuration')
	totalDuration : Date =   undefined;
 
	@property('UserId')
	userId : number =   undefined;



}
