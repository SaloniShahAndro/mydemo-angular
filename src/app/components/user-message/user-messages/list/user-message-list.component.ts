import { Component, OnInit, OnDestroy,  Input,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {RxToast, RxDialog, DialogClick } from '@rx/view';

import { UserMessage } from 'src/app/database-models';
import { UserMessagesService } from '../user-messages.service';
import { UserMessageDomain } from '../domain/user-message.domain';
import { ApplicationBroadcaster } from '@rx/core';
import { user } from '@rx/security';


@Component({
    templateUrl: './user-message-list.component.html',
})
export class UserMessageListComponent extends UserMessageDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    userMessages: UserMessage[];
    listSubscription: Subscription;
    clientId:number =0;
    role: any;
    userFullName: any;

    constructor(
        private userMessagesService: UserMessagesService,    
        private applicationBroadCaster: ApplicationBroadcaster,
        private dialog: RxDialog,
        private activatedRoute: ActivatedRoute,
		private router: Router,
    ) { super();
        this.role = user.data['role'];
        this.userFullName = user.data['fullName'];
        activatedRoute.params.subscribe((param: any) => this.clientId = param['clientId']==undefined ? 0 :param['clientId']);
        this.applicationBroadCaster.refreshMessageSubscriber.subscribe(t=>{
            this.ngOnInit();
        })
    }

    ngOnInit(): void {
        if (this.listSubscription)
            this.listSubscription.unsubscribe();
      

            
            if(!this.clientId) {
        this.listSubscription = this.userMessagesService.get().subscribe(userMessages => {
            this.userMessages = userMessages;
            this.showComponent = true;
            this.applicationBroadCaster.refreshSidebarBroadcast(true);
        });
    }
        else{
            this.listSubscription = this.userMessagesService.getBy([this.clientId]).subscribe(userMessages => {
                this.userMessages = userMessages;
                this.userFullName = userMessages[0].userName;
                this.showComponent = true;
                this.applicationBroadCaster.refreshSidebarBroadcast(true);
            }); 
        }
        
    }



    ngOnDestroy(): void {
        if (this.listSubscription)
            this.listSubscription.unsubscribe();
        super.destroy();
    }
}
