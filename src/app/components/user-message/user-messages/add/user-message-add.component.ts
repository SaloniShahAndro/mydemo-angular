import { Component, OnInit, OnDestroy ,Input,ComponentFactoryResolver} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { RxMessageComponent } from '@rx/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { ComponentCanDeactivate, ApplicationBroadcaster } from "@rx/core";
import {RxToast, RxDialog, DialogClick } from '@rx/view';
import { RxValidation } from '@rx/forms';
import {  UserMessage, } from 'src/app/database-models';

import { } from 'src/app/lookups';
import { UserMessagesService } from '../user-messages.service';
import { UserMessageDomain } from '../domain/user-message.domain';
import { UserMessageLookupGroup } from '../domain/user-message.models';
import { user } from '@rx/security';


@Component({
    templateUrl: './user-message-add.component.html',
    selector:'app-add-message',
    entryComponents : [RxMessageComponent]
})
export class UserMessageAddComponent extends UserMessageDomain implements OnInit, OnDestroy, ComponentCanDeactivate  {
    [x: string]: any;
    showComponent:boolean = false;
    userMessageFormGroup: FormGroup;
    addSubscription: Subscription;
    userMessageLookupGroup: UserMessageLookupGroup;
     userId: any;
    @Input() clientId: number = 0;
;
    constructor(
        private validation: RxValidation,
        private router: Router,
        private toast: RxToast,
        private userMessagesService: UserMessagesService,    
        private applicationBroadCaster: ApplicationBroadcaster,
    ) {         
        super();
        this.userId = user.data['userId'];
        this.role = user.data['role'];
    }

    ngOnInit(): void {
				this.userMessageLookupGroup = new UserMessageLookupGroup();
                this.userMessageLookupGroup.userMessage = new UserMessage();
                this.userMessageFormGroup = this.validation.getFormGroup(this.userMessageLookupGroup.userMessage);
                
                this.userId= this.clientId==0?this.userId:this.clientId;
                this.setDefaultValues();
                this.showComponent = true;
    }

    setDefaultValues(){
        this.userMessageFormGroup.controls.createdBy.setValue(this.userId);
        this.userMessageFormGroup.controls.createdOn.setValue(new Date())
        if(this.role==1){
            this.userMessageFormGroup.controls.isAdminRead.setValue(true)
            this.userMessageFormGroup.controls.isUserRead.setValue(false)
        }
        else{
            this.userMessageFormGroup.controls.isUserRead.setValue(true)
            this.userMessageFormGroup.controls.isAdminRead.setValue(false)
        }
        
        
 
        this.userMessageFormGroup.controls.userId.setValue(this.userId);
        this.userMessageFormGroup.controls.userMessageId.setValue(0);
        this.userMessageFormGroup.controls.userType.setValue(this.role);
    }

    addUserMessage(): void {
        this.addSubscription =  this.userMessagesService.post(this.userMessageFormGroup.value).subscribe(t => {
            this.userMessageFormGroup.reset();
            this.setDefaultValues();
            this.applicationBroadCaster.refreshMessageBroadcast(true);
            this.toast.show(t[0], { status: 'success' });
        },
            error => {
                
        })
    }

	canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        return !this.userMessageFormGroup.dirty;
    }

    ngOnDestroy(): void {
        if (this.addSubscription)
            this.addSubscription.unsubscribe();
        super.destroy();
    }

}
