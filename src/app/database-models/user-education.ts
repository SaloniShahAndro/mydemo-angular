import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { User } from './user'; @table('UserEducations')
export class UserEducation {
    constructor(userEducation?: UserEducation )  {
        let properties = [ "city", "createdBy", "createdOn", "degreeType", "graduatedYear", "institution", "institutionType", "modifiedBy", "modifiedOn", "state", "userEducationId", "userId",];
        for (let property of properties)
            if (userEducation && (userEducation[property] || userEducation[property] == 0))
                this[property] = userEducation[property];
    }
 
    @maxLength(100)
	@property('City')
	city : string = undefined ;
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
    @maxLength(50)
	@property('DegreeType')
	degreeType : string = undefined ;
 
	@property('GraduatedYear')
	graduatedYear : Date =   undefined;
 
    @maxLength(100)
	@property('Institution')
	institution : string = undefined ;
 
    @maxLength(100)
	@property('InstitutionType')
	institutionType : string = undefined ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
	@property('State')
	state : number =   undefined;
 
	@property('UserEducationId')
	userEducationId : number =   0 ;
 
    @range(0,2147483647)
	@property('UserId')
	userId : number =   undefined;
	user : User  ;



}
