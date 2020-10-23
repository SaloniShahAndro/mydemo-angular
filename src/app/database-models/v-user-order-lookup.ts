import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUserOrderLookups')
export class vUserOrderLookup {
    constructor(vUserOrderLookup?: vUserOrderLookup )  {
        let properties = [ "orderId", "paymentStatus", "userId",];
        for (let property of properties)
            if (vUserOrderLookup && (vUserOrderLookup[property] || vUserOrderLookup[property] == 0))
                this[property] = vUserOrderLookup[property];
    }
 
    @range(1,2147483647)
	@property('OrderId')
	orderId : number =   undefined;
 
    @range(1,2147483647)
	@property('PaymentStatus')
	paymentStatus : number =   undefined;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;



}
