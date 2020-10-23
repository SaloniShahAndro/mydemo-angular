import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vLanguageLookUps')
export class vLanguageLookUp {
    constructor(vLanguageLookUp?: vLanguageLookUp )  {
        let properties = [ "languageId", "languageName",];
        for (let property of properties)
            if (vLanguageLookUp && (vLanguageLookUp[property] || vLanguageLookUp[property] == 0))
                this[property] = vLanguageLookUp[property];
    }
 
	@property('LanguageId')
	languageId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('LanguageName')
	languageName : string = undefined ;



}
