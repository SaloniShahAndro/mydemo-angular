import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { User } from './user';import { RolePermission } from './role-permission'; @table('Roles')
export class Role {
    constructor(role?: Role )  {
        let properties = [ "roleId", "roleName", "status", "users", "rolePermissions",];
        for (let property of properties)
            if (role && (role[property] || role[property] == 0))
                this[property] = role[property];
    }
 
	@property('RoleId')
	roleId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('RoleName')
	roleName : string = undefined ;
 
    @range(0,2147483647)
	@property('Status')
	status : number =   undefined;
	@nested(User)
	users: User[];

	@nested(RolePermission)
	rolePermissions: RolePermission[];




}
