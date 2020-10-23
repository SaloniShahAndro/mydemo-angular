import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { ApplicationModule } from './application-module';import { Role } from './role'; @table('RolePermissions')
export class RolePermission {
    constructor(rolePermission?: RolePermission )  {
        let properties = [ "canAdd", "canDelete", "canEdit", "canView", "rolePermissionId", "applicationModuleId", "roleId",];
        for (let property of properties)
            if (rolePermission && (rolePermission[property] || rolePermission[property] == 0))
                this[property] = rolePermission[property];
    }
 
	@property('CanAdd')
	canAdd : boolean = false ;
 
	@property('CanDelete')
	canDelete : boolean = false ;
 
	@property('CanEdit')
	canEdit : boolean = false ;
 
	@property('CanView')
	canView : boolean = false ;
 
	@property('RolePermissionId')
	rolePermissionId : number =   0 ;
 
    @range(0,2147483647)
	@property('ApplicationModuleId')
	applicationModuleId : number =   undefined;
	applicationModule : ApplicationModule  ;
 
    @range(0,2147483647)
	@property('RoleId')
	roleId : number =   undefined;
	role : Role  ;



}
