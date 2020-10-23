import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('States')
export class State {
    constructor(state?: State )  {
        let properties = [ "stateCode", "stateId", "stateName",];
        for (let property of properties)
            if (state && (state[property] || state[property] == 0))
                this[property] = state[property];
    }
 
    @required()
    @maxLength(10)
	@property('StateCode')
	stateCode : string = undefined ;
 
	@property('StateId')
	stateId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('StateName')
	stateName : string = undefined ;



}
