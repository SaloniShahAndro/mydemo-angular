import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { Project } from './project';import { BuildGroup } from './build-group'; @table('FTPs')
export class FTP {
    constructor(fTP?: FTP )  {
        let properties = [ "destination", "exclude", "fTPId", "fTPPassword", "fTPUsername", "include", "port", "serverName", "source", "tag", "projectId", "buildGroups", "buildGroups1", "buildGroups2",];
        for (let property of properties)
            if (fTP && (fTP[property] || fTP[property] == 0))
                this[property] = fTP[property];
    }
 
    @required()
    @maxLength(256)
	@property('Destination')
	destination : string = undefined ;
 
    @maxLength(512)
	@property('Exclude')
	exclude : string = undefined ;
 
	@property('FTPId')
	fTPId : number =   0 ;
 
    @required()
    @maxLength(32)
	@property('FTPPassword')
	fTPPassword : string = undefined ;
 
    @required()
    @maxLength(32)
	@property('FTPUsername')
	fTPUsername : string = undefined ;
 
    @maxLength(512)
	@property('Include')
	include : string = undefined ;
 
    @range(1,2147483647)
	@property('Port')
	port : number =   undefined;
 
    @required()
    @maxLength(128)
	@property('ServerName')
	serverName : string = undefined ;
 
    @required()
    @maxLength(256)
	@property('Source')
	source : string = undefined ;
 
    @required()
    @maxLength(16)
	@property('Tag')
	tag : string = undefined ;
 
    @range(0,2147483647)
	@property('ProjectId')
	projectId : number =   undefined;
	project : Project  ;
	@nested(BuildGroup)
	buildGroups: BuildGroup[];

	@nested(BuildGroup)
	buildGroups1: BuildGroup[];

	@nested(BuildGroup)
	buildGroups2: BuildGroup[];




}
