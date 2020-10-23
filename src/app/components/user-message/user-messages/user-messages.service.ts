import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Rx';

import { RxHttp, RequestQueryParams, LookupAction } from '@rx/http';
import { AuthorizeApi} from "@rx/security";

import {  UserMessage, } from 'src/app/database-models';
import { UserMessageLookupGroup } from './domain/user-message.models';

@Injectable()
export class UserMessagesService {
   

	private get api(): AuthorizeApi {
        var authorizeApi: AuthorizeApi = {
            api: `api/UserMessages`,
            applicationModuleId: 7,
            keyName:'userMessageId'
	
        }
        return authorizeApi;
    }

    constructor(
        private http: RxHttp
    ) { }

    lookup<UserMessageLookupGroup>(lookupActions: LookupAction[]): Promise<UserMessageLookupGroup> {
        return this.http.lookup<UserMessageLookupGroup>(lookupActions);
    }

    group<UserMessageLookupGroup>(params: any[] | {
        [key: string]: any;
    } | RequestQueryParams, lookupActions: LookupAction[]): Promise<UserMessageLookupGroup> {
        return this.http.group<UserMessageLookupGroup>(this.api, params, 'userMessage', lookupActions);
    }

	search(search: any): Observable<UserMessage[]> {
        return this.http.search<UserMessage[]>(this.api, search,false);
    }

    get(): Observable<UserMessage[]> {
        return this.http.get<UserMessage[]>(this.api);
    }

    getBy(params?: any[] | {
        [key: string]: any;
    } | RequestQueryParams): Observable<any> {
        return this.http.get<any>(this.api, params); 
    }

    post(userMessage: UserMessage): Observable<UserMessage> {
        return this.http.post<UserMessage>(this.api, userMessage,false);
    }

    put(userMessage: UserMessage): Observable<UserMessage> {
        return this.http.put<UserMessage>(this.api, userMessage);
    }

    delete(id : number): Observable<UserMessage> {
        return this.http.delete<UserMessage>(this.api,id);
    }

	filterLookup<T>(lookup:LookupAction,filterParameters:any[],queryParams?: {[key:string]:any}):Observable<T> {
        return this.http.filterLookup(lookup,filterParameters,queryParams);
    }

}
