import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
import { UserPackage } from './user-package';import { User } from './user';import { UserOrderResponse } from './user-order-response'; @table('UserOrders')
export class UserOrder {
    constructor(userOrder?: UserOrder )  {
        let properties = [ "createdBy", "createdOn", "modifiedBy", "modifiedOn", "orderId", "paymentStatus", "orderStatus", "packageId", "userId", "userOrderResponse",];
        for (let property of properties)
            if (userOrder && (userOrder[property] || userOrder[property] == 0))
                this[property] = userOrder[property];
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
 
	@property('OrderId')
	orderId : number =   0 ;
 
    @range(1,2147483647)
	@property('PaymentStatus')
	paymentStatus : number =   undefined;
 
    @range(0,2147483647)
	@property('OrderStatus')
	orderStatus : number =   undefined;
 
    @range(0,2147483647)
	@property('PackageId')
	packageId : number =   undefined;
	userPackage : UserPackage  ;
 
    @range(0,2147483647)
	@property('UserId')
	userId : number =   undefined;
	user : User  ;
	@nested(UserOrderResponse)
	userOrderResponse: UserOrderResponse[];




}
