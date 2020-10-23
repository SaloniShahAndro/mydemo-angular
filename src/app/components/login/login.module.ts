import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxViewModule } from "@rx/view";
import { RxTableModule } from "@rx/table";
import { RxFormsModule } from "@rx/forms";
import { LOGIN_ROUTING } from './login.routing';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    LOGIN_ROUTING,
    CommonModule, RxViewModule, RxTableModule, FormsModule, ReactiveFormsModule, RxFormsModule
  ],
  declarations: [LoginComponent],
  exports: [RouterModule],
  providers: [LoginService]
})
export class LoginModule { }
