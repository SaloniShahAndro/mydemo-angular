import { Component, OnInit, OnDestroy,  Input,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {RxToast, RxDialog, DialogClick, RxPopup, TabModel } from '@rx/view';

import { UserMessage } from 'src/app/database-models';
import { UserMessagesService } from '../user-messages.service';
import { UserMessageDomain } from '../domain/user-message.domain';

import { UserMessageViewComponent } from 'src/app/components/user-message/user-messages/view/user-message-view.component';

@Component({
    templateUrl: './user-message-search.component.html',
	entryComponents : [ UserMessageViewComponent, ]
})
export class UserMessageSearchComponent extends UserMessageDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    userMessages: UserMessage[];
    searchSubscription: Subscription;
    originalMessages: UserMessage[];

    constructor(
        private userMessagesService: UserMessagesService,    
        private dialog: RxDialog,
		private router: Router,
		private componentFactoryResolver: ComponentFactoryResolver,
		private popup: RxPopup,
    ) { super();  this.popup.setComponent(componentFactoryResolver); }

    ngOnInit(): void {
        if (this.searchSubscription)
            this.searchSubscription.unsubscribe();
        this.searchSubscription = this.userMessagesService.search('').subscribe(userMessages => {

            this.originalMessages = userMessages.map(x => Object.assign({}, x));
            this.userMessages = userMessages.map(x => Object.assign({}, x));
           
            this.userMessages.forEach(element => {
                if(element['Message'].length > 30){
                element['Message'] =  element['Message'].substring(0,30) + "...";
                }
            });
           
   
            this.showComponent = true;
        });
    }

	showUserMessageViewComponent(uMessage:any) {
        let messageData = this.originalMessages.filter(t=>t['UserId'] == uMessage.UserId)[0]
        this.popup.show(UserMessageViewComponent,{userMessage:messageData}).then(t=>this.ngOnInit());


    }


    ngOnDestroy(): void {
        if (this.searchSubscription)
            this.searchSubscription.unsubscribe();
        super.destroy();
    }
}
