import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { UserOrder } from './user-order'; @table('UserOrderResponse')
export class UserOrderResponse {
    constructor(userOrderResponse?: UserOrderResponse )  {
        let properties = [ "createdBy", "createdOn", "dueDate", "isOrderProcessed", "modifiedBy", "modifiedOn", "orderRequestId", "orderResponseUrl", "referenceNumber", "userOrderResponseId", "orderId",];
        for (let property of properties)
            if (userOrderResponse && (userOrderResponse[property] || userOrderResponse[property] == 0))
                this[property] = userOrderResponse[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
	@property('DueDate')
	dueDate : Date =   undefined;
 
	@property('IsOrderProcessed')
	isOrderProcessed : boolean = false ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @maxLength(500)
	@property('OrderRequestId')
	orderRequestId : string = undefined ;
 
    @maxLength(500)
	@property('OrderResponseUrl')
	orderResponseUrl : string = undefined ;
 
    @required()
    @maxLength(500)
	@property('ReferenceNumber')
	referenceNumber : string = undefined ;
 
	@property('UserOrderResponseId')
	userOrderResponseId : number =   0 ;
 
    @range(0,2147483647)
	@property('OrderId')
	orderId : number =   undefined;
	userOrder : UserOrder  ;



}
