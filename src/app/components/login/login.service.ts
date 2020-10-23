import {Injectable } from "@angular/core";
import {Observable } from 'rxjs/Rx';

import { RxHttp, RequestQueryParams, LookupAction } from '@rx/http';
import { UserCredentialModel, UserAuthenticationViewModel, ForgotPasswordViewModel } from "./domain/login.models";
import { UserForgotPasswordModel } from './domain/forgotPassword.model';



@Injectable()
export class LoginService {
    private username: string;
    private api: string = 'api/UserAuthentication/login'
    private forgotPasswordApi : string = 'api/UserAuthentication/forgotPassword'

    constructor(
        private http: RxHttp
    ) { }

    post(userCredentialViewModel: UserCredentialModel): Observable<UserAuthenticationViewModel> {        
        return this.http.post<UserAuthenticationViewModel>(this.api, userCredentialViewModel, false);
    }
    postForgotPassword(userForgotPasswordModel: UserForgotPasswordModel): Observable<UserAuthenticationViewModel> {        
        return this.http.post<UserAuthenticationViewModel>(this.forgotPasswordApi, userForgotPasswordModel, false);
    }
}
