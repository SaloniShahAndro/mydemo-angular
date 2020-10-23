import { Component, EventEmitter, Input, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import { RxToast, RxPopup, RxDialog } from "@rx/view";
import { RxStorage } from "@rx/storage";

import { RxValidation } from '@rx/forms';
import { user, UserPermissionCache } from "@rx/security";
import { ApplicationConfiguration, ApplicationPage, ApplicationBroadcaster } from "@rx/core";
import { Language } from '../../../database-models/language';
import { UserCredentialModel } from '../domain/login.models';
import { LoginService } from '../login.service';
import { ApplicationService } from '../../../domain/authorization/app.service';
import { User } from '../../../database-models/user';
import { Router } from '@angular/router';
import { UserForgotPasswordModel } from '../domain/forgotPassword.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy, OnInit {
  loginFormGroup: FormGroup
  minutes: number;
  loginSubscription: Subscription;
  timeOutId: number;
  showComponent: boolean = false;
    currentYear: number ;
  isforgotPassword: boolean;
  forgotPasswordFormGroup: FormGroup;
  constructor(private validation: RxValidation,
    private storage: RxStorage,
    private loginService: LoginService,
    private toast: RxToast,
    private applicationBroadCaster: ApplicationBroadcaster,
    private router: Router,
    private applicationService: ApplicationService
  ) {
  }
  ngOnInit() {
    if(window.location.pathname=="/"){
      this.router.navigateByUrl('home');
    }
    this.currentYear = new Date().getFullYear();
    let loginModel = new UserCredentialModel();
    this.loginFormGroup = this.validation.getFormGroup(loginModel);
    this.forgotPasswordFormGroup = this.validation.getFormGroup(new UserForgotPasswordModel());
    this.showComponent = true;
    this.isforgotPassword = false;
    let auth = this.storage.local.get("auth");
    if (auth)
      this.router.navigate(['dashboard']);
    else
      this.applicationService.getConfiguration('defaultLanguage').subscribe(t => {
        t = t.json();
        ApplicationConfiguration.set(t);
      })
      this.applicationBroadCaster.loginHeaderBroadCast(false);

  }
 
  login(): void {
    if (this.loginSubscription)
      this.loginSubscription.unsubscribe();
    let failedCount = this.storage.local.get('failedCount') == undefined ? 0 : this.storage.local.get('failedCount');
    this.loginFormGroup.controls['failedCount'].setValue(failedCount);

    this.loginSubscription = this.loginService.post(this.loginFormGroup.value).subscribe(t => {
      if (t.failedLogin) {
        this.toast.show(t.validationMessage, { status: 'error' });
      }
      else {
        document.cookie = "requestContext=abc";
        this.storage.local.save('auth', t.token);
        user.data = { 'emailId': t.emailId, 'userId': t.userId,'fullName':t.fullName ,'role':t.roleId , 'userName': t.userName}
        user.authorizationPermissionItem = t.modules;
        for (var rootModuleId in t.modules) {
          let userPermissionCache = new UserPermissionCache({ rootModuleId: parseInt(rootModuleId), permission: t.modules[rootModuleId], requestedDate: this.getDate() });
          user.permissions.push(userPermissionCache);
        }
        this.timeOutId = window.setTimeout(() => {
          window.clearTimeout(this.timeOutId);
          this.applicationBroadCaster.loginBroadCast(true)
        }, 50);
        this.applicationBroadCaster.loginHeaderBroadCast(true);
        this.router.navigate(['dashboard']);
      }
      this.storage.local.save('failedCount', t.failedCount);
    }, error => {
      window.clearTimeout(10000);
      this.toast.show(error.validationMessage, { status: 'error' });
    });
  }
  forgotPassword(){
    this.loginSubscription = this.loginService.postForgotPassword(this.forgotPasswordFormGroup.value).subscribe(t => {
      if(t.failedLogin){
        this.toast.show(t.validationMessage, { status: 'error' });       
      }
      else{
        this.isforgotPassword = false;
        this.forgotPasswordFormGroup.reset();
        this.toast.show(t.validationMessage, { status: 'success' });
      }
    });
  }
  
  getDate(): Date {
    let now = new Date();
    return new Date(now.getTime() + this.minutes * 60000)
  }
  ngOnDestroy(): void {
    if (this.loginSubscription)
      this.loginSubscription.unsubscribe();
  }
}
