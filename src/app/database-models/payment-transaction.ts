import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('PaymentTransactions')
export class PaymentTransaction {
    constructor(paymentTransaction?: PaymentTransaction )  {
        let properties = [ "createdBy", "createdOn", "modifiedBy", "modifiedOn", "orderId", "price", "transactionId", "usercardDetailId",];
        for (let property of properties)
            if (paymentTransaction && (paymentTransaction[property] || paymentTransaction[property] == 0))
                this[property] = paymentTransaction[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @range(1,2147483647)
	@property('OrderId')
	orderId : number =   undefined;
 
    @required()
	@property('Price')
	price : number =   undefined;
 
	@property('TransactionId')
	transactionId : number =   0 ;
 
	@property('UsercardDetailId')
	usercardDetailId : number =   undefined;



}
