import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { AuditRequest } from './audit-request';import { AuditRecordDetail } from './audit-record-detail'; @table('AuditRecords')
export class AuditRecord {
    constructor(auditRecord?: AuditRecord )  {
        let properties = [ "auditRecordId", "eventType", "newValue", "oldValue", "recordId", "recordName", "tableName", "auditRequestId", "auditRecordDetails",];
        for (let property of properties)
            if (auditRecord && (auditRecord[property] || auditRecord[property] == 0))
                this[property] = auditRecord[property];
    }
 
	@property('AuditRecordId')
	auditRecordId : number =   0 ;
 
    @required()
    @maxLength(9)
	@property('EventType')
	eventType : string = undefined ;
 
    @required()
	@property('NewValue')
	newValue : string = undefined ;
 
	@property('OldValue')
	oldValue : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('RecordId')
	recordId : string = undefined ;
 
    @required()
	@property('RecordName')
	recordName : string = undefined ;
 
    @required()
    @maxLength(50)
	@property('TableName')
	tableName : string = undefined ;
 
	@property('AuditRequestId')
	auditRequestId : number =   undefined;
	auditRequest : AuditRequest  ;
	@nested(AuditRecordDetail)
	auditRecordDetails: AuditRecordDetail[];




}
