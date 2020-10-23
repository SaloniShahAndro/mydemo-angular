import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('Companies')
export class Company {
    constructor(company?: Company )  {
        let properties = [ "companyId", "companyName", "dBConnectionString", "domainName", "domainURL",];
        for (let property of properties)
            if (company && (company[property] || company[property] == 0))
                this[property] = company[property];
    }
 
	@property('CompanyId')
	companyId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('CompanyName')
	companyName : string = undefined ;
 
    @required()
    @maxLength(1000)
	@property('DBConnectionString')
	dBConnectionString : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('DomainName')
	domainName : string = undefined ;
 
    @required()
    @maxLength(200)
	@property('DomainURL')
	domainURL : string = undefined ;



}
