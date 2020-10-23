import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vStripeTransactionsLookups')
export class vStripeTransactionsLookup {
    constructor(vStripeTransactionsLookup?: vStripeTransactionsLookup )  {
        let properties = [ "stripeId", "stripeTransactionId",];
        for (let property of properties)
            if (vStripeTransactionsLookup && (vStripeTransactionsLookup[property] || vStripeTransactionsLookup[property] == 0))
                this[property] = vStripeTransactionsLookup[property];
    }
 
    @required()
    @maxLength(500)
	@property('StripeId')
	stripeId : string = undefined ;
 
	@property('StripeTransactionId')
	stripeTransactionId : number =   0 ;



}
