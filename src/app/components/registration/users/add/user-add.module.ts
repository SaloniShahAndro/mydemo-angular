import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import {RxFormsModule} from "@rx/forms";
import {RxViewModule} from "@rx/view";
import {    RxTableModule} from "@rx/table";

import { UserAddComponent } from './user-add.component'
import { USER_ADD_ROUTING } from './user-add.routing'
import {UsersService } from "../users.service";

@NgModule({
    imports: [
        USER_ADD_ROUTING ,
        CommonModule, RxViewModule, RxTableModule, RxFormsModule, FormsModule, ReactiveFormsModule,
		    ],
    declarations: [UserAddComponent ],
    exports: [RouterModule],
    providers: [UsersService]
})
export class UserAddModule { }