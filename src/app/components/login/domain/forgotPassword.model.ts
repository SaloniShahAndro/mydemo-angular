import { required } from "@rx/annotations";

export class UserForgotPasswordModel {
    @required()
    userName: string = undefined;    
}
