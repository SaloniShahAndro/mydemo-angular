import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { ApplicationTimeZone } from './application-time-zone';import { Language } from './language'; @table('GlobalSettings')
export class GlobalSetting {
    constructor(globalSetting?: GlobalSetting )  {
        let properties = [ "autoTranslation", "configurationId", "lockDuration", "recordLock", "requestLogging", "socialAuth", "twoFactorAuthentication", "applicationTimeZoneId", "languageId",];
        for (let property of properties)
            if (globalSetting && (globalSetting[property] || globalSetting[property] == 0))
                this[property] = globalSetting[property];
    }
 
	@property('AutoTranslation')
	autoTranslation : boolean = false ;
 
	@property('ConfigurationId')
	configurationId : number =   0 ;
 
    @maxLength(10)
	@property('LockDuration')
	lockDuration : string = undefined ;
 
	@property('RecordLock')
	recordLock : boolean = false ;
 
	@property('RequestLogging')
	requestLogging : boolean = false ;
 
	@property('SocialAuth')
	socialAuth : boolean = false ;
 
	@property('TwoFactorAuthentication')
	twoFactorAuthentication : boolean = false ;
 
    @range(0,2147483647)
	@property('ApplicationTimeZoneId')
	applicationTimeZoneId : number =   undefined;
	applicationTimeZone : ApplicationTimeZone  ;
 
    @range(0,2147483647)
	@property('LanguageId')
	languageId : number =   undefined;
	language : Language  ;



}
