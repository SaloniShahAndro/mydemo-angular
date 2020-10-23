import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { ModuleContent } from './module-content'; @table('LanguageContents')
export class LanguageContent {
    constructor(languageContent?: LanguageContent )  {
        let properties = [ "contentType", "en", "fr", "languageContentId", "languageContentName", "moduleContents",];
        for (let property of properties)
            if (languageContent && (languageContent[property] || languageContent[property] == 0))
                this[property] = languageContent[property];
    }
 
    @maxLength(50)
	@property('ContentType')
	contentType : string = undefined ;
 
	@property('En')
	en : string = undefined ;
 
	@property('Fr')
	fr : string = undefined ;
 
	@property('LanguageContentId')
	languageContentId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('LanguageContentName')
	languageContentName : string = undefined ;
	@nested(ModuleContent)
	moduleContents: ModuleContent[];




}
