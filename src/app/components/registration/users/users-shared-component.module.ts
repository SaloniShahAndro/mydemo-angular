import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RxViewModule } from '@rx/view';
import {RxFormsModule } from '@rx/forms';
import {RxTableModule } from "@rx/table";
import {DynamicComponentContainer } from '@rx/core';

import { UserViewComponent } from './view/user-view.component'
import {UsersService } from "./users.service";
import {USERS_SHARED_COMPONENT_CONTAINER } from './users-shared-component.container';
@NgModule({
    imports: [
        RxViewModule, RxFormsModule,
        CommonModule, FormsModule, ReactiveFormsModule, RxTableModule
    ],
    declarations: [ UserViewComponent, ],
    providers: [UsersService ],
    exports: [RouterModule, UserViewComponent, ]
})
export class UsersSharedComponentModule { }
DynamicComponentContainer.register(USERS_SHARED_COMPONENT_CONTAINER );