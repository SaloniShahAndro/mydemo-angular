import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserDetailComponent } from './user-detail.component'
import { USER_DETAIL_ROUTING } from './user-detail.routing'
import {UsersService } from "../users.service";

@NgModule({
    imports: [
        USER_DETAIL_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,
		    ],
    declarations: [UserDetailComponent ],
    exports: [RouterModule],
    providers: [UsersService]
})
export class UserDetailModule { }