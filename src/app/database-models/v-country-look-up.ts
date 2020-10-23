import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vCountryLookUps')
export class vCountryLookUp {
    constructor(vCountryLookUp?: vCountryLookUp )  {
        let properties = [ "countryId", "countryName",];
        for (let property of properties)
            if (vCountryLookUp && (vCountryLookUp[property] || vCountryLookUp[property] == 0))
                this[property] = vCountryLookUp[property];
    }
 
	@property('CountryId')
	countryId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('CountryName')
	countryName : string = undefined ;



}
