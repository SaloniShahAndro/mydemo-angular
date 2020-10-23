import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RxViewModule } from '@rx/view';
import {RxFormsModule } from '@rx/forms';
import {RxTableModule } from "@rx/table";
import {DynamicComponentContainer } from '@rx/core';

import { UserMessageAddComponent } from './add/user-message-add.component'
import {UserMessagesService } from "./user-messages.service";
import {USER_MESSAGES_SHARED_COMPONENT_CONTAINER } from './user-messages-shared-component.container';
@NgModule({
    imports: [
        RxViewModule, RxFormsModule,
        CommonModule, FormsModule, ReactiveFormsModule, RxTableModule
    ],
    declarations: [ UserMessageAddComponent, ],
    providers: [UserMessagesService ],
    exports: [RouterModule, UserMessageAddComponent, ]
})
export class UserMessagesSharedComponentModule { }
DynamicComponentContainer.register(USER_MESSAGES_SHARED_COMPONENT_CONTAINER );