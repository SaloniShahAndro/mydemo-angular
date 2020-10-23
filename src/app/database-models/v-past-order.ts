import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('vPastOrders')
export class vPastOrder {
    constructor(vPastOrder?: vPastOrder )  {
        let properties = [ "age", "applicantName", "orderDate", "orderId", "orderStatus", "packageName", "paymentStatus", "reportLink", "userId", "userName",];
        for (let property of properties)
            if (vPastOrder && (vPastOrder[property] || vPastOrder[property] == 0))
                this[property] = vPastOrder[property];
    }
 
    @range(1,2147483647)
	@property('Age')
	age : number =   undefined;
 
    @required()
    @maxLength(201)
	@property('ApplicantName')
	applicantName : string = undefined ;
 
    @required()
	@property('OrderDate')
	orderDate : Date =   undefined;
 
    @range(1,2147483647)
	@property('OrderId')
	orderId : number =   undefined;
 
    @required()
    @maxLength(100)
	@property('OrderStatus')
	orderStatus : string = undefined ;
 
    @required()
    @maxLength(50)
	@property('PackageName')
	packageName : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('PaymentStatus')
	paymentStatus : string = undefined ;
 
    @maxLength(500)
	@property('ReportLink')
	reportLink : string = undefined ;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;
 
    @required()
    @maxLength(50)
	@property('UserName')
	userName : string = undefined ;



}
