import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('Configuration')
export class Configuration {
    constructor(configuration?: Configuration )  {
        let properties = [ "configurationName", "configurationValue", "id",];
        for (let property of properties)
            if (configuration && (configuration[property] || configuration[property] == 0))
                this[property] = configuration[property];
    }
 
    @required()
    @maxLength(128)
	@property('ConfigurationName')
	configurationName : string = undefined ;
 
    @required()
    @maxLength(1024)
	@property('ConfigurationValue')
	configurationValue : string = undefined ;
 
	@property('Id')
	id : number =   0 ;



}
