import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { PackageMapping } from './package-mapping'; @table('PackageDetails')
export class PackageDetail {
    constructor(packageDetail?: PackageDetail )  {
        let properties = [ "createdBy", "createdOn", "modifiedBy", "modifiedOn", "packageDetailId", "packageDetailName", "packageDetailPrice", "packageMapping",];
        for (let property of properties)
            if (packageDetail && (packageDetail[property] || packageDetail[property] == 0))
                this[property] = packageDetail[property];
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
 
	@property('PackageDetailId')
	packageDetailId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('PackageDetailName')
	packageDetailName : string = undefined ;
 
    @required()
	@property('PackageDetailPrice')
	packageDetailPrice : number =   undefined;
	@nested(PackageMapping)
	packageMapping: PackageMapping[];




}
