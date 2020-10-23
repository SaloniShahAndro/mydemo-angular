import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vPackageDetailsNew')
export class vPackageDetailsNew {
    constructor(vPackageDetailsNew?: vPackageDetailsNew )  {
        let properties = [ "isEmployee", "isPersonal", "packageDetailName",];
        for (let property of properties)
            if (vPackageDetailsNew && (vPackageDetailsNew[property] || vPackageDetailsNew[property] == 0))
                this[property] = vPackageDetailsNew[property];
    }
 
    @range(1,2147483647)
	@property('IsEmployee')
	isEmployee : number =   undefined;
 
    @range(1,2147483647)
	@property('IsPersonal')
	isPersonal : number =   undefined;
 
    @required()
    @maxLength(100)
	@property('PackageDetailName')
	packageDetailName : string = undefined ;



}
