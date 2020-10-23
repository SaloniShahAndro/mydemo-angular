import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { BuildStep } from './build-step'; @table('BuildTemplates')
export class BuildTemplate {
    constructor(buildTemplate?: BuildTemplate )  {
        let properties = [ "buildTemplateId", "buildTemplateName", "buildTemplateTechnology", "exePath", "buildSteps",];
        for (let property of properties)
            if (buildTemplate && (buildTemplate[property] || buildTemplate[property] == 0))
                this[property] = buildTemplate[property];
    }
 
	@property('BuildTemplateId')
	buildTemplateId : number =   0 ;
 
    @required()
    @maxLength(64)
	@property('BuildTemplateName')
	buildTemplateName : string = undefined ;
 
    @maxLength(16)
	@property('BuildTemplateTechnology')
	buildTemplateTechnology : string = undefined ;
 
    @maxLength(512)
	@property('ExePath')
	exePath : string = undefined ;
	@nested(BuildStep)
	buildSteps: BuildStep[];




}
