import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { UserOrder } from './user-order'; @table('UserOrderResponce')
export class UserOrderResponce {
    constructor(userOrderResponce?: UserOrderResponce )  {
        let properties = [ "createdBy", "createdOn", "isOrderProcessed", "modifiedBy", "modifiedOn", "orderRequestId", "orderResponceUrl", "personId", "userOrderResponceId", "orderId",];
        for (let property of properties)
            if (userOrderResponce && (userOrderResponce[property] || userOrderResponce[property] == 0))
                this[property] = userOrderResponce[property];
    }
 
    @range(1,2147483647)
	@property('CreatedBy')
	createdBy : number =   undefined;
 
    @required()
	@property('CreatedOn')
	createdOn : Date =   undefined;
 
	@property('IsOrderProcessed')
	isOrderProcessed : boolean = false ;
 
	@property('ModifiedBy')
	modifiedBy : number =   undefined;
 
	@property('ModifiedOn')
	modifiedOn : Date =   undefined;
 
    @required()
    @maxLength(500)
	@property('OrderRequestId')
	orderRequestId : string = undefined ;
 
    @maxLength(500)
	@property('OrderResponceUrl')
	orderResponceUrl : string = undefined ;
 
    @maxLength(500)
	@property('PersonId')
	personId : string = undefined ;
 
	@property('UserOrderResponceId')
	userOrderResponceId : number =   0 ;
 
    @range(0,2147483647)
	@property('OrderId')
	orderId : number =   undefined;
	userOrder : UserOrder  ;



}
