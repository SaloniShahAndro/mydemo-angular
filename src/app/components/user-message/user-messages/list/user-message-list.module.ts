import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserMessageListComponent } from './user-message-list.component'
import { USER_MESSAGE_LIST_ROUTING } from './user-message-list.routing'
import {UserMessagesService } from "../user-messages.service";
import { UserMessagesSharedComponentModule } from '../user-messages-shared-component.module';

@NgModule({
    imports: [
        USER_MESSAGE_LIST_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,UserMessagesSharedComponentModule
		    ],
    declarations: [UserMessageListComponent ],
    exports: [RouterModule],
    providers: [UserMessagesService]
})
export class UserMessageListModule { }