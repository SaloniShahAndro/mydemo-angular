import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { User } from './user'; @table('UserEmployments')
export class UserEmployment {
    constructor(userEmployment?: UserEmployment )  {
        let properties = [ "city", "createdBy", "createdOn", "employerTypeId", "employmentName", "endYear", "modifiedBy", "modifiedOn", "position", "startYear", "state", "userEmploymentId", "userId",];
        for (let property of properties)
            if (userEmployment && (userEmployment[property] || userEmployment[property] == 0))
                this[property] = userEmployment[property];
    }
 
    @maxLength(50)
	@property('City')
	city : string = undefined ;
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
    @range(1,2147483647)
	@property('EmployerTypeId')
	employerTypeId : number =   undefined;
 
    @maxLength(100)
	@property('EmploymentName')
	employmentName : string = undefined ;
 
	@property('EndYear')
	endYear : Date =   undefined;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @maxLength(50)
	@property('position')
	position : string = undefined ;
 
	@property('StartYear')
	startYear : Date =   undefined;
 
    @maxLength(50)
	@property('State')
	state : string = undefined ;
 
	@property('UserEmploymentId')
	userEmploymentId : number =   0 ;
 
    @range(0,2147483647)
	@property('UserId')
	userId : number =   undefined;
	user : User  ;



}
