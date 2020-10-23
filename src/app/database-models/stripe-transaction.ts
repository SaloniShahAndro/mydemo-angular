import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('StripeTransactions')
export class StripeTransaction {
    constructor(stripeTransaction?: StripeTransaction )  {
        let properties = [ "createdBy", "createdOn", "description", "email", "isActive", "modifiedBy", "modifiedOn", "paymentId", "productId", "productName", "stripeId", "stripeTransactionId",];
        for (let property of properties)
            if (stripeTransaction && (stripeTransaction[property] || stripeTransaction[property] == 0))
                this[property] = stripeTransaction[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
    @required()
    @maxLength(1000)
	@property('Description')
	description : string = undefined ;
 
    @required()
    @maxLength(300)
	@property('Email')
	email : string = undefined ;
 
	@property('IsActive')
	isActive : boolean = false ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @required()
    @maxLength(500)
	@property('PaymentId')
	paymentId : string = undefined ;
 
    @range(1,2147483647)
	@property('ProductId')
	productId : number =   undefined;
 
    @required()
    @maxLength(500)
	@property('ProductName')
	productName : string = undefined ;
 
    @required()
    @maxLength(500)
	@property('StripeId')
	stripeId : string = undefined ;
 
	@property('StripeTransactionId')
	stripeTransactionId : number =   0 ;



}
