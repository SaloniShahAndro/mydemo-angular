import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vAdminStatusCountLookups')
export class vAdminStatusCountLookup {
    constructor(vAdminStatusCountLookup?: vAdminStatusCountLookup )  {
        let properties = [ "completed", "employersPackage", "inProgress", "personalPackage",];
        for (let property of properties)
            if (vAdminStatusCountLookup && (vAdminStatusCountLookup[property] || vAdminStatusCountLookup[property] == 0))
                this[property] = vAdminStatusCountLookup[property];
    }
 
	@property('Completed')
	completed : number =   undefined;
 
	@property('EmployersPackage')
	employersPackage : number =   undefined;
 
	@property('InProgress')
	inProgress : number =   undefined;
 
	@property('PersonalPackage')
	personalPackage : number =   undefined;



}
