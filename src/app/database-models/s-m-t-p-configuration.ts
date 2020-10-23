import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('SMTPConfigurations')
export class SMTPConfiguration {
    constructor(sMTPConfiguration?: SMTPConfiguration )  {
        let properties = [ "defaultCredentials", "deliveryMethod", "enableSSL", "fromEmail", "host", "isActive", "password", "port", "sendIndividually", "smtpConfigurationId", "userName",];
        for (let property of properties)
            if (sMTPConfiguration && (sMTPConfiguration[property] || sMTPConfiguration[property] == 0))
                this[property] = sMTPConfiguration[property];
    }
 
	@property('DefaultCredentials')
	defaultCredentials : boolean = false ;
 
    @maxLength(100)
	@property('DeliveryMethod')
	deliveryMethod : string = undefined ;
 
	@property('EnableSSL')
	enableSSL : boolean = false ;
 
    @required()
    @maxLength(200)
	@property('FromEmail')
	fromEmail : string = undefined ;
 
    @required()
    @maxLength(100)
	@property('Host')
	host : string = undefined ;
 
	@property('IsActive')
	isActive : boolean = false ;
 
    @maxLength(100)
	@property('Password')
	password : string = undefined ;
 
    @range(1,2147483647)
	@property('Port')
	port : number =   undefined;
 
	@property('SendIndividually')
	sendIndividually : boolean = false ;
 
	@property('SmtpConfigurationId')
	smtpConfigurationId : number =   0 ;
 
    @maxLength(200)
	@property('UserName')
	userName : string = undefined ;



}
