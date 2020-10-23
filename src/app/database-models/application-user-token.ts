import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';
@table('ApplicationUserTokens')
export class ApplicationUserToken {
    constructor(applicationUserToken?: ApplicationUserToken )  {
        let properties = [ "accessedPlatform", "applicationUserTokenId", "createdDateTime", "expiresAt", "isActive", "jwtToken", "securityKey", "tokenIssuer", "userId",];
        for (let property of properties)
            if (applicationUserToken && (applicationUserToken[property] || applicationUserToken[property] == 0))
                this[property] = applicationUserToken[property];
    }
 
    @required()
    @maxLength(100)
	@property('AccessedPlatform')
	accessedPlatform : string = undefined ;
 
	@property('ApplicationUserTokenId')
	applicationUserTokenId : number =   0 ;
 
    @required()
	@property('CreatedDateTime')
	createdDateTime : Date =   undefined;
 
    @required()
	@property('ExpiresAt')
	expiresAt : Date =   undefined;
 
	@property('IsActive')
	isActive : boolean = false ;
 
    @required()
	@property('JwtToken')
	jwtToken : string = undefined ;
 
    @required()
    @maxLength(32)
	@property('SecurityKey')
	securityKey : any =   undefined;
 
    @required()
    @maxLength(50)
	@property('TokenIssuer')
	tokenIssuer : string = undefined ;
 
    @range(1,2147483647)
	@property('UserId')
	userId : number =   undefined;



}
