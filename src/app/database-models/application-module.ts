import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { ModuleMaster } from './module-master';import { ModuleContent } from './module-content';import { RolePermission } from './role-permission'; @table('ApplicationModules')
export class ApplicationModule {
    constructor(applicationModule?: ApplicationModule )  {
        let properties = [ "applicationModuleId", "parentApplicationModuleId", "visibleActionItem", "moduleMasterId", "moduleContents", "rolePermissions",];
        for (let property of properties)
            if (applicationModule && (applicationModule[property] || applicationModule[property] == 0))
                this[property] = applicationModule[property];
    }
 
	@property('ApplicationModuleId')
	applicationModuleId : number =   0 ;
 
	@property('ParentApplicationModuleId')
	parentApplicationModuleId : number =   undefined;
 
    @required()
    @maxLength(1)
	@property('VisibleActionItem')
	visibleActionItem : string = undefined ;
 
    @range(0,2147483647)
	@property('ModuleMasterId')
	moduleMasterId : number =   undefined;
	moduleMaster : ModuleMaster  ;
	@nested(ModuleContent)
	moduleContents: ModuleContent[];

	@nested(RolePermission)
	rolePermissions: RolePermission[];




}
