import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { Project } from './project'; @table('Branches')
export class Branch {
    constructor(branch?: Branch )  {
        let properties = [ "branchId", "branchName", "projectId",];
        for (let property of properties)
            if (branch && (branch[property] || branch[property] == 0))
                this[property] = branch[property];
    }
 
	@property('BranchId')
	branchId : number =   0 ;
 
    @required()
    @maxLength(16)
	@property('BranchName')
	branchName : string = undefined ;
 
    @range(0,2147483647)
	@property('ProjectId')
	projectId : number =   undefined;
	project : Project  ;



}
