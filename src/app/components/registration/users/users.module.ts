import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';


import { USERS_ROUTING } from './users.routing';
import { UsersService } from './users.service';

@NgModule({
    imports: [USERS_ROUTING],
    exports: [RouterModule],
    providers: [UsersService]
})
export class UsersModule { }