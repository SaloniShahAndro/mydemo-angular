import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { SourceControlType } from './source-control-type';import { FTP } from './f-t-p';import { BuildGroup } from './build-group';import { Branch } from './branch'; @table('Projects')
export class Project {
    constructor(project?: Project )  {
        let properties = [ "baseURL", "buildPattern", "createdBy", "createdDateTime", "emails", "id", "projectCode", "projectId", "projectManager", "projectName", "sourceCodePath", "sourceControlTypeId", "fTPs", "buildGroups", "branches",];
        for (let property of properties)
            if (project && (project[property] || project[property] == 0))
                this[property] = project[property];
    }
 
    @required()
    @maxLength(512)
	@property('BaseURL')
	baseURL : string = undefined ;
 
    @required()
    @maxLength(16)
	@property('BuildPattern')
	buildPattern : string = undefined ;
 
    @required()
    @maxLength(64)
	@property('CreatedBy')
	createdBy : string = undefined ;
 
    @required()
	@property('CreatedDateTime')
	createdDateTime : Date =   undefined;
 
    @required()
    @maxLength(512)
	@property('Emails')
	emails : string = undefined ;
 
	@property('Id')
	id : number =   0 ;
 
    @required()
    @maxLength(64)
	@property('ProjectCode')
	projectCode : string = undefined ;
 
    @range(1,2147483647)
	@property('ProjectId')
	projectId : number =   undefined;
 
    @required()
    @maxLength(128)
	@property('ProjectManager')
	projectManager : string = undefined ;
 
    @required()
    @maxLength(256)
	@property('ProjectName')
	projectName : string = undefined ;
 
    @required()
    @maxLength(256)
	@property('SourceCodePath')
	sourceCodePath : string = undefined ;
 
    @required()
	@property('SourceControlTypeId')
	sourceControlTypeId : number =   undefined;
	sourceControlType : SourceControlType  ;
	@nested(FTP)
	fTPs: FTP[];

	@nested(BuildGroup)
	buildGroups: BuildGroup[];

	@nested(Branch)
	branches: Branch[];




}
