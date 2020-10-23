import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('LockRecords')
export class LockRecord {
    constructor(lockRecord?: LockRecord )  {
        let properties = [ "applicationModuleId", "childModuleName", "expiresAt", "lockRecordId", "recordId", "userName",];
        for (let property of properties)
            if (lockRecord && (lockRecord[property] || lockRecord[property] == 0))
                this[property] = lockRecord[property];
    }
 
    @range(1,2147483647)
	@property('ApplicationModuleId')
	applicationModuleId : number =   undefined;
 
    @maxLength(100)
	@property('ChildModuleName')
	childModuleName : string = undefined ;
 
    @required()
	@property('ExpiresAt')
	expiresAt : Date =   undefined;
 
	@property('LockRecordId')
	lockRecordId : number =   0 ;
 
    @range(1,2147483647)
	@property('RecordId')
	recordId : number =   undefined;
 
    @required()
    @maxLength(100)
	@property('UserName')
	userName : string = undefined ;



}
