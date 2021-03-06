import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('PaymentResponce')
export class PaymentResponce {
    constructor(paymentResponce?: PaymentResponce )  {
        let properties = [ "createdBy", "createdOn", "errorCode", "errorText", "isTransactionSucess", "messagesCode", "messagesDescription", "modifiedBy", "modifiedOn", "orderId", "paymentResponceId", "responseCode", "transactionAuthCode", "transactionId", "userId",];
        for (let property of properties)
            if (paymentResponce && (paymentResponce[property] || paymentResponce[property] == 0))
                this[property] = paymentResponce[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
    @maxLength(50)
	@property('ErrorCode')
	errorCode : string = undefined ;
 
    @maxLength(150)
	@property('ErrorText')
	errorText : string = undefined ;
 
	@property('IsTransactionSucess')
	isTransactionSucess : boolean = false ;
 
    @maxLength(50)
	@property('MessagesCode')
	messagesCode : string = undefined ;
 
    @maxLength(150)
	@property('MessagesDescription')
	messagesDescription : string = undefined ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @range(1,2147483647)
	@property('OrderId')
	orderId : number =   undefined;
 
	@property('PaymentResponceId')
	paymentResponceId : number =   0 ;
 
    @maxLength(50)
	@property('ResponseCode')
	responseCode : string = undefined ;
 
    @maxLength(50)
	@property('TransactionAuthCode')
	transactionAuthCode : string = undefined ;
 
    @maxLength(50)
	@property('TransactionId')
	transactionId : string = undefined ;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;



}
