import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserInfoComponent } from './user-info.component'
import { USER_INFO_ROUTING } from './user-info.routing'
import {UsersService } from "../users.service";

@NgModule({
    imports: [
        USER_INFO_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,
		    ],
    declarations: [UserInfoComponent ],
    exports: [RouterModule],
    providers: [UsersService]
})
export class UserInfoModule { }