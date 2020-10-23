import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserMessageSearchComponent } from './user-message-search.component'
import { USER_MESSAGE_SEARCH_ROUTING } from './user-message-search.routing'
import {UserMessagesService } from "../user-messages.service";
import { UserMessagesSharedComponentModule } from 'src/app/components/user-message/user-messages/user-messages-shared-component.module'
import { UserMessageViewComponent } from '../view/user-message-view.component';

@NgModule({
    imports: [
        USER_MESSAGE_SEARCH_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,
		UserMessagesSharedComponentModule,     ],
    declarations: [UserMessageSearchComponent,UserMessageViewComponent ],
    exports: [RouterModule],
    providers: [UserMessagesService]
})
export class UserMessageSearchModule { }