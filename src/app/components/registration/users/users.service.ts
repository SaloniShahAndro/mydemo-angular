import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Rx';

import { RxHttp, RequestQueryParams, LookupAction } from '@rx/http';
import { AuthorizeApi} from "@rx/security";

import {  User, vPackageDetail, vUser, } from 'src/app/database-models';
import { UserLookupGroup } from './domain/user.models';
import { UserAuthenticationViewModel } from 'src/app/components/login/domain/login.models';

@Injectable()
export class UsersService {
   

	private get api(): AuthorizeApi {
        var authorizeApi: AuthorizeApi = {
            api: `api/Users`,
            applicationModuleId: 5,
            keyName:'userId'
	
        }
        return authorizeApi;
    }

    constructor(
        private http: RxHttp
    ) { }

    lookup<UserLookupGroup>(lookupActions: LookupAction[]): Promise<UserLookupGroup> {
        return this.http.lookup<UserLookupGroup>(lookupActions);
    }

    group<UserLookupGroup>(params: any[] | {
        [key: string]: any;
    } | RequestQueryParams, lookupActions: LookupAction[]): Promise<UserLookupGroup> {
        return this.http.group<UserLookupGroup>(this.api, params, 'user', lookupActions);
    }

	// search(search: any): Observable<vUser[]> {
    //     return this.http.search<vUser[]>(this.api, search);
    // }

    // get(): Observable<vUser[]> {
    //     return this.http.get<vUser[]>(this.api);
    // }

     get(): Observable<any[]> {
        return this.http.get<any[]>(this.api);
    }

    getBy(params?: any[] | {
        [key: string]: any;
    } | RequestQueryParams): Observable<vUser> {
        return this.http.get<vUser>(this.api, params); 
    }

    post(user: User): Observable<UserAuthenticationViewModel> {
        return this.http.post<UserAuthenticationViewModel>(this.api, user,true);
    }

    put(user: User): Observable<User> {
        return this.http.put<User>(this.api, user);
    }

    delete(id : number): Observable<User> {
        return this.http.delete<User>(this.api,id,null,false);
    }

	filterLookup<T>(lookup:LookupAction,filterParameters:any[],queryParams?: {[key:string]:any}):Observable<T> {
        return this.http.filterLookup(lookup,filterParameters,queryParams);
    }
    patch(userId: number,  data: any): Observable<User> {        
        return this.http.patch<User>(this.api, userId, data);
      }

}
