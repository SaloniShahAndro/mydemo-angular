import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('Employees')
export class Employee {
    constructor(employee?: Employee )  {
        let properties = [ "email", "id", "name",];
        for (let property of properties)
            if (employee && (employee[property] || employee[property] == 0))
                this[property] = employee[property];
    }
 
    @maxLength(100)
	@property('Email')
	email : string = undefined ;
 
	@property('Id')
	id : number =   0 ;
 
    @maxLength(100)
	@property('Name')
	name : string = undefined ;



}
