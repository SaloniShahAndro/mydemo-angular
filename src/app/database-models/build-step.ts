import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { BuildGroup } from './build-group';import { BuildTemplate } from './build-template'; @table('BuildSteps')
export class BuildStep {
    constructor(buildStep?: BuildStep )  {
        let properties = [ "arguments", "buildStepId", "fileName", "workingDirectory", "buildGroupId", "buildTemplateId",];
        for (let property of properties)
            if (buildStep && (buildStep[property] || buildStep[property] == 0))
                this[property] = buildStep[property];
    }
 
    @maxLength(256)
	@property('Arguments')
	arguments : string = undefined ;
 
	@property('BuildStepId')
	buildStepId : number =   0 ;
 
    @maxLength(256)
	@property('FileName')
	fileName : string = undefined ;
 
    @maxLength(256)
	@property('WorkingDirectory')
	workingDirectory : string = undefined ;
 
    @range(0,2147483647)
	@property('BuildGroupId')
	buildGroupId : number =   undefined;
	buildGroup : BuildGroup  ;
 
    @range(0,2147483647)
	@property('BuildTemplateId')
	buildTemplateId : number =   undefined;
	buildTemplate : BuildTemplate  ;



}
