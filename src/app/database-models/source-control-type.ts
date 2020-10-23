import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { Project } from './project'; @table('SourceControlType')
export class SourceControlType {
    constructor(sourceControlType?: SourceControlType )  {
        let properties = [ "sourceControlTypeId", "sourceControlTypeName", "projects",];
        for (let property of properties)
            if (sourceControlType && (sourceControlType[property] || sourceControlType[property] == 0))
                this[property] = sourceControlType[property];
    }
 
    @required()
	@property('SourceControlTypeId')
	sourceControlTypeId : number =   0 ;
 
    @required()
    @maxLength(16)
	@property('SourceControlTypeName')
	sourceControlTypeName : string = undefined ;
	@nested(Project)
	projects: Project[];




}
