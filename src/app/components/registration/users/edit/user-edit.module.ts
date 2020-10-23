import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserEditComponent } from './user-edit.component'
import { USER_EDIT_ROUTING } from './user-edit.routing'
import {UsersService } from "../users.service";

@NgModule({
    imports: [
        USER_EDIT_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,
		    ],
    declarations: [UserEditComponent ],
    exports: [RouterModule],
    providers: [UsersService]
})
export class UserEditModule { }