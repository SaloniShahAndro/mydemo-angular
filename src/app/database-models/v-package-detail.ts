import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vPackageDetails')
export class vPackageDetail {
    constructor(vPackageDetail?: vPackageDetail )  {
        let properties = [ "packageDetailId", "packageDetailName", "packageId", "packageName", "packagePrice",];
        for (let property of properties)
            if (vPackageDetail && (vPackageDetail[property] || vPackageDetail[property] == 0))
                this[property] = vPackageDetail[property];
    }
 
    @range(1,2147483647)
	@property('PackageDetailId')
	packageDetailId : number =   undefined;
 
    @required()
    @maxLength(100)
	@property('PackageDetailName')
	packageDetailName : string = undefined ;
 
    @range(1,2147483647)
	@property('PackageId')
	packageId : number =   undefined;
 
    @required()
    @maxLength(50)
	@property('PackageName')
	packageName : string = undefined ;
 
    @required()
	@property('PackagePrice')
	packagePrice : number =   undefined;



}
