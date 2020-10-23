import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vStatesLookups')
export class vStatesLookup {
    constructor(vStatesLookup?: vStatesLookup )  {
        let properties = [ "stateId", "stateName",];
        for (let property of properties)
            if (vStatesLookup && (vStatesLookup[property] || vStatesLookup[property] == 0))
                this[property] = vStatesLookup[property];
    }
 
	@property('StateId')
	stateId : number =   0 ;
 
    @required()
    @maxLength(50)
	@property('StateName')
	stateName : string = undefined ;



}
