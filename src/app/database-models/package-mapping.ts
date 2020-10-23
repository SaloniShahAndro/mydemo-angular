import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { PackageDetail } from './package-detail';import { UserPackage } from './user-package'; @table('PackageMapping')
export class PackageMapping {
    constructor(packageMapping?: PackageMapping )  {
        let properties = [ "packageMappingId", "packageDetailId", "packageId",];
        for (let property of properties)
            if (packageMapping && (packageMapping[property] || packageMapping[property] == 0))
                this[property] = packageMapping[property];
    }
 
	@property('PackageMappingId')
	packageMappingId : number =   0 ;
 
    @range(0,2147483647)
	@property('PackageDetailId')
	packageDetailId : number =   undefined;
	packageDetail : PackageDetail  ;
 
    @range(0,2147483647)
	@property('PackageId')
	packageId : number =   undefined;
	userPackage : UserPackage  ;



}
