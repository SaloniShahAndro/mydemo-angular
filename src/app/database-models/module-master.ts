import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { ApplicationModule } from './application-module'; @table('ModuleMasters')
export class ModuleMaster {
    constructor(moduleMaster?: ModuleMaster )  {
        let properties = [ "active", "isRolePermissionItem", "isRoot", "moduleMasterId", "moduleMasterName", "applicationModules",];
        for (let property of properties)
            if (moduleMaster && (moduleMaster[property] || moduleMaster[property] == 0))
                this[property] = moduleMaster[property];
    }
 
	@property('Active')
	active : boolean = false ;
 
	@property('IsRolePermissionItem')
	isRolePermissionItem : boolean = false ;
 
	@property('IsRoot')
	isRoot : boolean = false ;
 
	@property('ModuleMasterId')
	moduleMasterId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('ModuleMasterName')
	moduleMasterName : string = undefined ;
	@nested(ApplicationModule)
	applicationModules: ApplicationModule[];




}
