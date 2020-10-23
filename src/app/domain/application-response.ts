import { ReflectiveInjector, Inject } from "@angular/core";
import {Response } from "@angular/http";

import { ResponseResult } from "@rx/http";

import {RxSpinner, RxToast } from "@rx/view";
import { ApplicationConfiguration, ApplicationBroadcaster } from "@rx/core";
import '@rx/linq';

import {requestCollection, Uri } from './request-uri';
import { RxStorage } from "@rx/storage";


export class ApplicationResponse implements ResponseResult {
    dataOperationMessage: {};
    storage: RxStorage;
    timeOut: any;
    constructor( @Inject(RxToast) private rxToast: RxToast, @Inject(RxSpinner) private spinner: RxSpinner, @Inject(ApplicationBroadcaster) private applicationBroadcaster: ApplicationBroadcaster) {
        this.applicationBroadcaster.configurationSubscriber.subscribe(t => {
            this.dataOperationMessage = ApplicationConfiguration.get('dataOperation');
        })
        let injector: any = ReflectiveInjector.resolveAndCreate([RxStorage]);
        this.storage = injector.get(RxStorage);
    }

    check(response: Response, requestMethod: string, showToast: boolean): boolean {
        requestCollection.splice(0, 1);
        if (requestCollection.length == 0)
            this.spinner.hide();
            
//Test code starts

   if (this.timeOut)
        window.clearTimeout(this.timeOut);
      if (requestCollection.length > 0) {
        this.timeOut = setTimeout(() => {
          this.spinner.hide();
          var length = requestCollection.length;
          for(var i=0;i<length;i++){
            requestCollection .splice(0,1);
          }
          window.clearTimeout(this.timeOut);
        }, 5000)
      }

// Test code Ends



        if(!this.dataOperationMessage){
            this.dataOperationMessage = ApplicationConfiguration.get('dataOperation');
        }
        if (showToast == undefined && this.dataOperationMessage && this.dataOperationMessage[requestMethod.toLowerCase()] && (response.status == 200 || response.status == 204 || response.status == 201))
            this.rxToast.show(this.dataOperationMessage[requestMethod.toLowerCase()]);
        else if(response.status == 417 || response.status == 406)      {
            this.storage.local.clearAll();
            window.location.href = '/login';
        }  
        return true;
    }

    error(message: string) {
        requestCollection.splice(0, 1);
    if (requestCollection.length == 0)
      this.spinner.hide();
      this.rxToast.show("Error Occured.", { status: 'error' });
    }
}
