import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vUserOrder')
export class vUserOrder {
    constructor(vUserOrder?: vUserOrder )  {
        let properties = [ "orderId", "packageId", "packageName", "packagePrice", "paymentStatus", "userId",];
        for (let property of properties)
            if (vUserOrder && (vUserOrder[property] || vUserOrder[property] == 0))
                this[property] = vUserOrder[property];
    }
 
    @range(1,2147483647)
	@property('OrderId')
	orderId : number =   undefined;
 
    @range(1,2147483647)
	@property('PackageId')
	packageId : number =   undefined;
 
    @required()
    @maxLength(50)
	@property('PackageName')
	packageName : string = undefined ;
 
    @required()
	@property('PackagePrice')
	packagePrice : number =   undefined;
 
    @range(1,2147483647)
	@property('PaymentStatus')
	paymentStatus : number =   undefined;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;



}
