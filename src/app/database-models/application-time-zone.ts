import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { GlobalSetting } from './global-setting'; @table('ApplicationTimeZones')
export class ApplicationTimeZone {
    constructor(applicationTimeZone?: ApplicationTimeZone )  {
        let properties = [ "active", "applicationTimeZoneId", "applicationTimeZoneName", "comment", "countryId", "globalSettings",];
        for (let property of properties)
            if (applicationTimeZone && (applicationTimeZone[property] || applicationTimeZone[property] == 0))
                this[property] = applicationTimeZone[property];
    }
 
	@property('Active')
	active : boolean = false ;
 
	@property('ApplicationTimeZoneId')
	applicationTimeZoneId : number =   0 ;
 
    @required()
    @maxLength(100)
	@property('ApplicationTimeZoneName')
	applicationTimeZoneName : string = undefined ;
 
    @required()
    @maxLength(200)
	@property('Comment')
	comment : string = undefined ;
 
    @range(1,2147483647)
	@property('CountryId')
	countryId : number =   undefined;
	@nested(GlobalSetting)
	globalSettings: GlobalSetting[];




}
