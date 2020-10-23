import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { RxMessageComponent } from '@rx/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { ComponentCanDeactivate, ApplicationConfiguration, ApplicationBroadcaster } from "@rx/core";
import { RxToast, RxDialog, DialogClick } from '@rx/view';
import { RxValidation } from '@rx/forms';
import { User, UserEducation, UserAddress, UserPhoneNumber, } from 'src/app/database-models';
import { UsersService } from '../users.service';
import { UserDomain } from '../domain/user.domain';
import { UserLookupGroup } from '../domain/user.models';
import { GENDERS, US_STATES } from 'src/app/database-collections';
import { user, UserPermissionCache } from "@rx/security";
import { REGISTRATION_LOOKUP_URIS } from 'src/app/lookup-uris/registration-lookups.uris';
import { RegistrationLookups } from 'src/app/lookups/registration-lookups';
import { RxStorage } from '@rx/storage';
import { AddressTypeEnum } from 'src/app/enums';
@Component({
    templateUrl: './user-add.component.html',
    entryComponents: [RxMessageComponent]
})
export class UserAddComponent extends UserDomain implements OnInit, OnDestroy, ComponentCanDeactivate {
    showComponent: boolean = false;
    userFormGroup: FormGroup;
    addSubscription: Subscription;
    userLookupGroup: UserLookupGroup; educationDetalis: FormGroup;
    addressDetails: FormGroup;
    minutes: number;
    educationDetalisArray: any[] = [];
    isAdditionalInformationPage: boolean ;
    genderList: { "genderId": number; "genderName": string; }[];
    isEmailExists: boolean;
    timeOutId: number;
    isUserNameExists: boolean;
    userAddressFormGroup: FormArray;
    stateList: { "stateName": string; "stateId": number; }[] = [];
    isClickFunnels: any;
    constructor(
        private applicationBroadCaster: ApplicationBroadcaster,
        private storage: RxStorage,
        private validation: RxValidation,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private toast: RxToast,
        private usersService: UsersService,
        private formbuilder: FormBuilder,
    ) {
        super();
        activatedRoute.queryParams.subscribe(t => {
            if (t["isClickFunnels"])
              this.isClickFunnels = t["isClickFunnels"];
              console.log(this.isClickFunnels)
            // this.mode = t["mode"];
          })
    }
    ngOnInit(): void {
        this.usersService.filterLookup(RegistrationLookups.statesLookups, []).subscribe((response: any) => {
            this.stateList = response;
            this.addSubscription = this.usersService.delete(0).subscribe(t => { });
            this.applicationBroadCaster.loginHeaderBroadCast(true);
            this.genderList = GENDERS;
            this.isAdditionalInformationPage = false;
            this.userLookupGroup = new UserLookupGroup();
            this.userLookupGroup.user = new User();
            this.userLookupGroup.user.applicationTimeZoneId = 1;
            this.userLookupGroup.user.statusId = 1;
            this.userLookupGroup.user.createdBy = 1;
            this.userLookupGroup.user.createdOn = new Date();
            this.userLookupGroup.user.userAddresses = new Array<UserAddress>(new UserAddress());
            this.userLookupGroup.user.userPhoneNumbers = new Array<UserPhoneNumber>(new UserPhoneNumber());
            this.userLookupGroup.user.userEducations = new Array<UserEducation>(new UserEducation());
            this.userFormGroup = this.validation.getFormGroup(this.userLookupGroup.user);
            this.userFormGroup.controls.userAddresses['controls'][0].controls.userAddressType.setValue(AddressTypeEnum.Current);
            this.userFormGroup.controls.roleId.setValue(2);
            for (let i = 0; i < (this.userFormGroup.controls.userAddresses['controls'].length); i++) {
                this.userFormGroup.controls.userAddresses['controls'][i].controls.createdBy.setValue(1);
                this.userFormGroup.controls.userAddresses['controls'][i].controls.userId.setValue(1);
                this.userFormGroup.controls.userAddresses['controls'][i].controls.createdOn.setValue(new Date());
            }
            this.userAddressFormGroup = (<FormArray>((this.userFormGroup).controls['userAddresses']));
            this.userFormGroup.controls.userEducations['controls'][0].controls.userId.setValue(0);
            this.userFormGroup.controls.userEducations['controls'][0].controls.createdBy.setValue(1);
            this.userFormGroup.controls.userEducations['controls'][0].controls.createdOn.setValue(new Date());
            this.userFormGroup.controls.userPhoneNumbers['controls'][0].controls.userId.setValue(0);
            this.userFormGroup.controls.userPhoneNumbers['controls'][0].controls.createdBy.setValue(1);
            this.userFormGroup.controls.userPhoneNumbers['controls'][0].controls.createdOn.setValue(new Date());
            this.showComponent = true;
        })
    }
    additionalInformationPage(): void {
        this.isAdditionalInformationPage = true;
    }
    addUser(): void {
        this.userFormGroup.value.userAddresses = [];
        this.userAddressFormGroup.controls.forEach(element => {
            this.userFormGroup.value.userAddresses.push(element.value);
        });
        this.addSubscription = this.usersService.post(this.userFormGroup.value).subscribe(t => {
            //Creating auth and saving token after signup process
            document.cookie = "requestContext=abc";
            this.storage.local.save('auth', t.token);
            user.data = { 'emailId': t.emailId, 'userId': t.userId, 'fullName': t.fullName, 'role': t.roleId }
            user.authorizationPermissionItem = t.modules;
            for (var rootModuleId in t.modules) {
                let userPermissionCache = new UserPermissionCache({ rootModuleId: parseInt(rootModuleId), permission: t.modules[rootModuleId], requestedDate: this.getDate() });
                user.permissions.push(userPermissionCache);
            }
            // this.timeOutId = window.setTimeout(() => {
            //   window.clearTimeout(this.timeOutId);
            //   this.applicationBroadCaster.loginBroadCast(true)
            // }, 50);
            this.router.navigateByUrl('/user-orders/info')
        },
            error => {
                // this.toast.show("error", { status: "error" });
                this.toast.show(error, { status: 'error' });
                // alert("registration failed")
            })
    }
    getDate(): Date {
        let now = new Date();
        return new Date(now.getTime() + this.minutes * 60000)
    }
    addPhoneNumbers(): void {
        var phoneNumber = <FormArray>this.userFormGroup.get('userPhoneNumbers');
        phoneNumber.controls.push(this.validation.getFormGroup((new UserPhoneNumber())))
        let userData = this.userFormGroup.value;
        this.userLookupGroup = new UserLookupGroup();
        this.userLookupGroup.user = new User(userData);
        var userPhoneNumber = [];
        for (var i = 0; i < userData.userPhoneNumbers.length; i++) {
            userPhoneNumber.push(new UserPhoneNumber(userData.userPhoneNumbers[i]))
        }
        userPhoneNumber.push(new UserPhoneNumber())
        this.userLookupGroup.user.userPhoneNumbers = userPhoneNumber;
        this.userFormGroup = this.validation.getFormGroup(this.userLookupGroup.user);
    }
    addAddresses(): void {
        var data = new UserAddress();
        if (this.userAddressFormGroup.controls.length > 0) data.userAddressType = AddressTypeEnum.Past
        data.createdBy = 1;
        data.createdOn = new Date();
        data.userId = 1;
        this.userAddressFormGroup.controls.push(this.validation.getFormGroup(data));
        this.showComponent = true;
    }
    userNameCheck() {
        this.usersService.filterLookup(RegistrationLookups.userNameLookups, [this.userFormGroup.value.userName]).subscribe(t => {
            if (t["length"] > 0) {
                this.toast.show("UserName already exists", { status: "error" });
                this.isUserNameExists = true;
            }
            else {
                this.isUserNameExists = false;
            }
        })
    }
    canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        return !this.userFormGroup.dirty;
    }
    verifyPaymentCode() {
        this.usersService.filterLookup(RegistrationLookups.stripeTransactionsLookups, [this.userFormGroup.value.paymentCode]).subscribe(t => {
            if (t["length"] == 0) {
                this.toast.show("Invalid payment code.", { status: "error" });
            }
        })
    }
    ngOnDestroy(): void {
        if (this.addSubscription)
            this.addSubscription.unsubscribe();
        super.destroy();
    }
}
