import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { PackageMapping } from './package-mapping';import { UserOrder } from './user-order'; @table('UserPackages')
export class UserPackage {
    constructor(userPackage?: UserPackage )  {
        let properties = [ "createdBy", "createdOn", "modifiedBy", "modifiedOn", "packageId", "packageName", "packagePrice", "packageMapping", "userOrders",];
        for (let property of properties)
            if (userPackage && (userPackage[property] || userPackage[property] == 0))
                this[property] = userPackage[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
	@property('PackageId')
	packageId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('PackageName')
	packageName : string = undefined ;
 
    @required()
	@property('PackagePrice')
	packagePrice : number =   undefined;
	@nested(PackageMapping)
	packageMapping: PackageMapping[];

	@nested(UserOrder)
	userOrders: UserOrder[];




}
