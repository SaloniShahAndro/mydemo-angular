import { 
	User,
} from 'src/app/database-models';
import { required, maxLength, range, nested,table, property, alpha, alphaNumeric, numeric, uppercase,pattern,minDate,maxNumber,maxDate,lowercase,hexColor,email,contains,compare } from '@rx/annotations';

export class UserLookupGroup {
	user : User;
}
export class ChangePassword{
	@required()
	@property('UserPassword')
	@pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{6,25}")
	userPassword: string=undefined;
	@required()
	@property('ConfirmPassword')
	@compare('userPassword','confirmPassword')
	confirmPassword:string=undefined;
}