import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('Countries')
export class Country {
    constructor(country?: Country )  {
        let properties = [ "active", "countryCode", "countryId", "countryName", "currencyFormat", "dateFormat", "dateFormatSeperator", "decimalSeperator", "defaultLanguageId", "phoneFormat", "postalCodeFormat",];
        for (let property of properties)
            if (country && (country[property] || country[property] == 0))
                this[property] = country[property];
    }
 
	@property('Active')
	active : boolean = false ;
 
    @required()
    @maxLength(50)
	@property('CountryCode')
	countryCode : string = undefined ;
 
	@property('CountryId')
	countryId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('CountryName')
	countryName : string = undefined ;
 
    @maxLength(20)
	@property('CurrencyFormat')
	currencyFormat : string = undefined ;
 
    @maxLength(50)
	@property('DateFormat')
	dateFormat : string = undefined ;
 
    @maxLength(50)
	@property('DateFormatSeperator')
	dateFormatSeperator : string = undefined ;
 
    @maxLength(50)
	@property('DecimalSeperator')
	decimalSeperator : string = undefined ;
 
    @range(1,2147483647)
	@property('DefaultLanguageId')
	defaultLanguageId : number =   undefined;
 
    @maxLength(50)
	@property('PhoneFormat')
	phoneFormat : string = undefined ;
 
    @maxLength(50)
	@property('PostalCodeFormat')
	postalCodeFormat : string = undefined ;



}
