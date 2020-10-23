import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { FTP } from './f-t-p';import { Project } from './project';import { BuildStep } from './build-step'; @table('BuildGroups')
export class BuildGroup {
    constructor(buildGroup?: BuildGroup )  {
        let properties = [ "buildGroupId", "groupName", "priority", "devFTPId", "prodFTPId", "projectId", "stageFTPId", "buildSteps",];
        for (let property of properties)
            if (buildGroup && (buildGroup[property] || buildGroup[property] == 0))
                this[property] = buildGroup[property];
    }
 
	@property('BuildGroupId')
	buildGroupId : number =   0 ;
 
    @required()
    @maxLength(64)
	@property('GroupName')
	groupName : string = undefined ;
 
    @required()
	@property('Priority')
	priority : number =   undefined;
 
	@property('DevFTPId')
	devFTPId : number =   undefined;
	fTP : FTP  ;
 
	@property('ProdFTPId')
	prodFTPId : number =   undefined;
	fTP1 : FTP  ;
 
    @range(0,2147483647)
	@property('ProjectId')
	projectId : number =   undefined;
	project : Project  ;
 
	@property('StageFTPId')
	stageFTPId : number =   undefined;
	fTP2 : FTP  ;
	@nested(BuildStep)
	buildSteps: BuildStep[];




}
