import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Rx';

import { RxHttp, RequestQueryParams, LookupAction } from '@rx/http';
import { AuthorizeApi} from "@rx/security";

import {  UserOrder, } from 'src/app/database-models';
// src/app/database-models
import { UserOrderLookupGroup } from './domain/user-order.models';

@Injectable()
export class UserOrdersService {
	private userId: number;

	private get api(): AuthorizeApi {
        var authorizeApi: AuthorizeApi = {
            api: `api/Users/${this.userId}/UserOrders`,
            childModuleName: 'user-orders',
            keyName:'orderId'
	
        }
        return authorizeApi;
    }
    constructor(
        private http: RxHttp
    ) { }

    lookup<UserOrderLookupGroup>(lookupActions: LookupAction[]): Promise<UserOrderLookupGroup> {
        return this.http.lookup<UserOrderLookupGroup>(lookupActions);
    } 

    group<UserOrderLookupGroup>(userId : number, params: any[] | {
        [key: string]: any;
    } | RequestQueryParams, lookupActions: LookupAction[]): Promise<UserOrderLookupGroup> {
		this.userId = userId;
        return this.http.group<UserOrderLookupGroup>(this.api, params, 'UserOrder', lookupActions);
    }

	search(userId : number, search: any): Observable<UserOrder[]> {
		this.userId = userId;
        return this.http.search<UserOrder[]>(this.api, search);
    }

    get(userId : number): Observable<any> {
		this.userId = userId;
        return this.http.get<any>(this.api);
    }

    getBy(userId : number, params?: any[] | {
        [key: string]: any;
    } | RequestQueryParams): Observable<any> {
		this.userId = userId;
        return this.http.get<any>(this.api, params);
    }

    post(userId : number, userOrder: any): Observable<any> {
		this.userId = userId;
        return this.http.post<any>(this.api, userOrder,false);
    } 

    put(userId : number, userOrder: UserOrder): Observable<UserOrder> {
		this.userId = userId;
        return this.http.put<UserOrder>(this.api, userOrder);
    }

    delete(userId : number, id : number): Observable<UserOrder> {
		this.userId = userId;
        return this.http.delete<UserOrder>(this.api,id);
    }

	filterLookup<T>(lookup:LookupAction,filterParameters:any[],queryParams?: {[key:string]:any}):Observable<T> {
        return this.http.filterLookup<T>(lookup,filterParameters,queryParams);
    }

}
