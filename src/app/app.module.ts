import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { API_HOST_URI, RxHttp, APP_VERSION } from '@rx/http';
import { RxValidation, RxFormsModule } from '@rx/forms';
import { RxViewModule, RxViewServiceModule } from '@rx/view';
import { RxStorageModule } from '@rx/storage';
import { RxSecurityModule, PermissionService } from "@rx/security";
import { RxTableModule } from "@rx/table";
import { ApplicationBroadcaster } from "@rx/core";

import { ApplicationResponse } from "./domain/application-response";
import { ApplicationRequestHeaders } from "./domain/application-request-headers";
import { CanActivatePage, ApplicationJsonConfiguration, UserAuthorizationService, PageAccess, ApplicationService, ChangeDetectionGuard } from "./domain/authorization";


import { AppComponent } from './components/start/app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { FooterBarComponent } from './components/shared/footer-bar/footer-bar.component';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnAuthorizedComponent } from './components/unauthorized/unauthorized.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginService } from './components/login/login.service';

import { LoginModule } from './components/login/login.module';
import { APP_LAZY_ROUTING } from './components/start/app.lazy.routing';
import { TopBarAfterLoginComponent } from './components/shared/top-bar-after-login/top-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesCountService } from './components/shared/side-bar/messages-count.service';
import { UsersService } from './components/registration/users/users.service';



@NgModule({
    declarations: [
        AppComponent, SideBarComponent,HomeComponent, TopBarComponent,TopBarAfterLoginComponent, FooterBarComponent, NotFoundComponent, UnAuthorizedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule, RxTableModule,
        HttpModule, RxSecurityModule, CommonModule,
      RxFormsModule, RxViewModule, RxStorageModule, RxViewServiceModule, APP_LAZY_ROUTING, LoginModule
    ],
    providers: [PermissionService, RxValidation, LoginService, ApplicationBroadcaster,MessagesCountService,
        {
          provide: API_HOST_URI,
   useValue: environment.production ?
       '':
       'http://localhost:54919/'
      }
      ,
        {
            provide: APP_VERSION,
            useValue: environment.appVersion
        },
        { provide: 'RequestHeaders', useClass: ApplicationRequestHeaders },
        { provide: 'ResponseResult', useClass: ApplicationResponse }, RxHttp,
        { provide: 'PageAccess', useClass: PageAccess },
        { provide: 'ChangeDetectionGuard', useClass: ChangeDetectionGuard },
        UserAuthorizationService,
        CanActivatePage,
        ApplicationJsonConfiguration,
        PageAccess,
      ApplicationService, ChangeDetectionGuard,
      UsersService
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
