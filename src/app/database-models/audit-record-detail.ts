import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { AuditRecord } from './audit-record'; @table('AuditRecordDetails')
export class AuditRecordDetail {
    constructor(auditRecordDetail?: AuditRecordDetail )  {
        let properties = [ "auditRecordDetailId", "columnName", "newValue", "oldValue", "referenceTableName", "auditRecordId",];
        for (let property of properties)
            if (auditRecordDetail && (auditRecordDetail[property] || auditRecordDetail[property] == 0))
                this[property] = auditRecordDetail[property];
    }
 
	@property('AuditRecordDetailId')
	auditRecordDetailId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('ColumnName')
	columnName : string = undefined ;
 
	@property('NewValue')
	newValue : string = undefined ;
 
	@property('OldValue')
	oldValue : string = undefined ;
 
    @required()
    @maxLength(50)
	@property('ReferenceTableName')
	referenceTableName : string = undefined ;
 
    @range(0,2147483647)
	@property('AuditRecordId')
	auditRecordId : number =   undefined;
	auditRecord : AuditRecord  ;



}
