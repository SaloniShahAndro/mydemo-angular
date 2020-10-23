import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { GlobalSetting } from './global-setting'; @table('Languages')
export class Language {
    constructor(language?: Language )  {
        let properties = [ "active", "autoTranslate", "languageCode", "languageId", "languageName", "globalSettings",];
        for (let property of properties)
            if (language && (language[property] || language[property] == 0))
                this[property] = language[property];
    }
 
	@property('Active')
	active : boolean = false ;
 
	@property('AutoTranslate')
	autoTranslate : boolean = false ;
 
    @required()
    @maxLength(2)
	@property('LanguageCode')
	languageCode : string = undefined ;
 
	@property('LanguageId')
	languageId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('LanguageName')
	languageName : string = undefined ;
	@nested(GlobalSetting)
	globalSettings: GlobalSetting[];




}
