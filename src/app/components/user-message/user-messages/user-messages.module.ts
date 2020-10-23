import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';


import { USER_MESSAGES_ROUTING } from './user-messages.routing';
import { UserMessagesService } from './user-messages.service';


@NgModule({
    imports: [USER_MESSAGES_ROUTING],
    exports: [RouterModule],
    providers: [UserMessagesService]
})
export class UserMessagesModule { }