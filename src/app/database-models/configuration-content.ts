import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('ConfigurationContents')
export class ConfigurationContent {
    constructor(configurationContent?: ConfigurationContent )  {
        let properties = [ "configurationContentId", "configurationContentName", "en", "fr",];
        for (let property of properties)
            if (configurationContent && (configurationContent[property] || configurationContent[property] == 0))
                this[property] = configurationContent[property];
    }
 
	@property('ConfigurationContentId')
	configurationContentId : number =   0 ;
 
    @required()
	@property('ConfigurationContentName')
	configurationContentName : string = undefined ;
 
    @required()
	@property('En')
	en : string = undefined ;
 
	@property('Fr')
	fr : string = undefined ;



}
