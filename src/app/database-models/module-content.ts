import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { ApplicationModule } from './application-module';import { LanguageContent } from './language-content'; @table('ModuleContents')
export class ModuleContent {
    constructor(moduleContent?: ModuleContent )  {
        let properties = [ "action", "en", "fr", "languageContentType", "moduleContentId", "serverMessageId", "applicationModuleId", "languageContentId",];
        for (let property of properties)
            if (moduleContent && (moduleContent[property] || moduleContent[property] == 0))
                this[property] = moduleContent[property];
    }
 
    @required()
    @maxLength(10)
	@property('Action')
	action : string = undefined ;
 
	@property('En')
	en : string = undefined ;
 
	@property('Fr')
	fr : string = undefined ;
 
    @maxLength(20)
	@property('LanguageContentType')
	languageContentType : string = undefined ;
 
	@property('ModuleContentId')
	moduleContentId : number =   0 ;
 
	@property('ServerMessageId')
	serverMessageId : number =   undefined;
 
    @range(0,2147483647)
	@property('ApplicationModuleId')
	applicationModuleId : number =   undefined;
	applicationModule : ApplicationModule  ;
 
    @range(0,2147483647)
	@property('LanguageContentId')
	languageContentId : number =   undefined;
	languageContent : LanguageContent  ;



}
