import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Rx';

import { RxHttp, RequestQueryParams, LookupAction } from '@rx/http';
import { AuthorizeApi} from "@rx/security";

import {  UserMessage, } from 'src/app/database-models';


@Injectable()
export class MessagesCountService {
   

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

	filterLookup<T>(lookup:LookupAction,filterParameters:any[],queryParams?: {[key:string]:any}):Observable<T> {
        return this.http.filterLookup(lookup,filterParameters,queryParams);
    }

}
