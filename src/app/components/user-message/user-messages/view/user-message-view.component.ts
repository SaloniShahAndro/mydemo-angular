import { Component, OnInit, OnDestroy,  Input,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {RxToast, RxDialog, DialogClick, RxPopup } from '@rx/view';

import { UserMessage } from 'src/app/database-models';
import { UserMessagesService } from '../user-messages.service';
import { UserMessageDomain } from '../domain/user-message.domain';


@Component({
    templateUrl: './user-message-view.component.html',
})
export class UserMessageViewComponent extends UserMessageDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    userMessages: UserMessage[];
    viewSubscription: Subscription;
   
    @Input() userMessage : any;

    constructor(
        private userMessagesService: UserMessagesService,    
        private dialog: RxDialog,
        private router: Router,
        private popup: RxPopup
    ) { super();}

    ngOnInit(): void {
        
    }

    hideUserMessageViewComponent():void {
        this.popup.hide(UserMessageViewComponent);


    }


    ngOnDestroy(): void {
        if (this.viewSubscription)
            this.viewSubscription.unsubscribe();
        super.destroy();
    }
}
