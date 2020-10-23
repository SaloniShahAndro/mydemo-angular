import { required } from "@rx/annotations";

export class UserCredentialModel {
  
    // email: string = undefined;
    @required()
    password: string = undefined;
    @required()
    userName: string = undefined;
    failedCount: number = 0;
}

export class UserAuthenticationViewModel {
    token: string;
    modules: any;
    roleId: number;
    fullName: string;
    emailId: string;
    userName:string;
    failedCount: number;
    failedLogin: boolean;
    validationMessage: string;
    isTemporaryPassword: boolean;
    userId: number;
    isFirstTime: boolean;
}

export class ForgotPasswordViewModel{
    email:string;
    isFailed:boolean;
}

