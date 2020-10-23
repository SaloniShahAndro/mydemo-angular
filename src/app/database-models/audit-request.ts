import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { AuditRecord } from './audit-record'; @table('AuditRequests')
export class AuditRequest {
    constructor(auditRequest?: AuditRequest )  {
        let properties = [ "applicationModuleId", "applicationTimeZoneId", "auditRequestId", "createdDate", "mainRecordId", "requestMethod", "uri", "userId", "auditRecords",];
        for (let property of properties)
            if (auditRequest && (auditRequest[property] || auditRequest[property] == 0))
                this[property] = auditRequest[property];
    }
 
    @range(1,2147483647)
	@property('ApplicationModuleId')
	applicationModuleId : number =   undefined;
 
    @range(1,2147483647)
	@property('ApplicationTimeZoneId')
	applicationTimeZoneId : number =   undefined;
 
	@property('AuditRequestId')
	auditRequestId : number =   0 ;
 
    @required()
	@property('CreatedDate')
	createdDate : Date =   undefined;
 
    @required()
    @maxLength(100)
	@property('MainRecordId')
	mainRecordId : string = undefined ;
 
    @required()
    @maxLength(20)
	@property('RequestMethod')
	requestMethod : string = undefined ;
 
    @required()
	@property('Uri')
	uri : string = undefined ;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;
	@nested(AuditRecord)
	auditRecords: AuditRecord[];




}
