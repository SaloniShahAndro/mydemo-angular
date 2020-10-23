import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { RxToast, RxDialog, DialogClick } from '@rx/view';
import { vUser, UserPhoneNumber, UserEducation, UserAddress, User } from 'src/app/database-models';
import { UsersService } from '../users.service';
import { UserDomain } from '../domain/user.domain';
import { GENDERS } from 'src/app/database-collections';
import { user } from '@rx/security';
import { UserLookupGroup } from '../domain/user.models';
import { RxValidation } from '@rx/forms';
import { RegistrationLookups } from 'src/app/lookups/registration-lookups';
import { FormArray } from '@angular/forms';
import { AddressTypeEnum } from 'src/app/enums';
import { ApplicationBroadcaster } from '@rx/core';
import { RxStorage } from '@rx/storage';
@Component({
    templateUrl: './user-detail.component.html',
})
export class UserDetailComponent extends UserDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    users: vUser[];
    detailSubscription: Subscription;
    genderList: { "genderId": number; "genderName": string; }[];
    userId: any;
    userLookupGroup: UserLookupGroup;
    userFormGroup: any;
    isUserNameExists: boolean;
    userAddressFormGroup: FormArray;
    stateList: {"stateName" : string;"stateId" : number; }[] = [];
    constructor(
        private storage: RxStorage,
        private applicationBroadCaster: ApplicationBroadcaster,
        private validation: RxValidation,
        private usersService: UsersService,
        private dialog: RxDialog,
        private router: Router,
        private toast: RxToast
    ) {
        super();
        this.userId = user.data['userId'];
    }
    ngOnInit(): void {
        this.usersService.filterLookup(RegistrationLookups.statesLookups, []).subscribe((response : any) => {
            this.stateList = response;

            this.usersService.getBy([this.userId]).subscribe(
                (response: vUser) => {
                    this.userLookupGroup = new UserLookupGroup();
                    this.genderList = GENDERS;
                    this.userLookupGroup.user = new User();
                    this.userLookupGroup.user.userId = response.userId;
                    this.userLookupGroup.user.alias = response.alias;
                    this.userLookupGroup.user.createdBy = 1;
                    this.userLookupGroup.user.createdOn = response.createdOn;
                    this.userLookupGroup.user.description = response.description;
                    this.userLookupGroup.user.dob = response['dob'] == null ? null : new Date(response['dob']);
                    this.userLookupGroup.user.emailId = response.emailId;
                    this.userLookupGroup.user.userName = response.userName;
                    this.userLookupGroup.user.ethnicity = response.ethnicity;
                    this.userLookupGroup.user.firstName = response.firstName;
                    this.userLookupGroup.user.gender = response.gender;
                    this.userLookupGroup.user.lastName = response.lastName;
                    this.userLookupGroup.user.middleName = response.middleName;
                    this.userLookupGroup.user.roleId = response.roleId;
                    this.userLookupGroup.user.statusId = response.statusId;
                    this.userLookupGroup.user.applicationTimeZoneId = 1;
                    this.userLookupGroup.user.notifyEmail = response.notifyEmail;
                    let userAddressList = JSON.parse(response.userAddress);
                    let userEducation = new UserEducation(JSON.parse(response.userEducations)[0]);
                    let userPhone = new UserPhoneNumber(JSON.parse(response.userPhonenumber)[0]);
                    let userAddress: any = [];
                    userAddressList[0].createdBy = (this.userId);
                    for (var i = 0; i < userAddressList.length; i++) {
                        userAddressList[i].state = parseInt(userAddressList[i].state);
                        userAddress.push(new UserAddress(userAddressList[i]))
                    }
                    this.userLookupGroup.user.userAddresses = userAddress;
                    this.userLookupGroup.user.userPhoneNumbers = new Array<UserPhoneNumber>(userPhone);
                    this.userLookupGroup.user.userEducations = new Array<UserEducation>(userEducation);
                    this.userFormGroup = this.validation.getFormGroup(this.userLookupGroup.user);
                    this.userAddressFormGroup = (<FormArray>((this.userFormGroup).controls['userAddresses']));
                    this.userFormGroup.controls['userPassword'].setValidators(null);
                    // for(let i=0;i<(this.userFormGroup.controls.userAddresses['controls'].length);i++){
                    //     this.userFormGroup.controls.userAddresses['controls'][i].controls.createdBy.setValue(1);
                    //     this.userFormGroup.controls.userAddresses['controls'][i].controls.userId.setValue(1);
                    //     this.userFormGroup.controls.userAddresses['controls'][i].controls.createdOn.setValue(new Date());
                    // }
                    this.showComponent = true;
                });
        })
    }
    addAddresses(): void {
        var data = new UserAddress();
        data.userAddressType = this.userAddressFormGroup.controls.length > 0 ? AddressTypeEnum.Past : AddressTypeEnum.Current
        data.createdBy = this.userId;
        data.createdOn = new Date();
        data.userId = this.userId;
        this.userAddressFormGroup.controls.push(this.validation.getFormGroup(data));
        this.showComponent = true;
    }
    editUser(): void {
        this.userFormGroup.value.userAddresses = [];
        this.userAddressFormGroup.controls.forEach(element => {
            this.userFormGroup.value.userAddresses.push(element.value);
        });
        this.detailSubscription = this.usersService.put(this.userFormGroup.value).subscribe(t => {
            user.data = { 'emailId': this.userFormGroup.value.emailId, 'userId': this.userId, 'fullName': this.userFormGroup.value.firstName + ' ' + this.userFormGroup.value.lastName, 'role': this.userFormGroup.value.roleId, 'userName': this.userFormGroup.value.userName }
            this.applicationBroadCaster.refreshSidebarBroadcast(true);
            this.router.navigateByUrl('/dashboard')
        },
            error => {
                this.dialog.validation(error);
            })
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
    ngOnDestroy(): void {
        if (this.detailSubscription)
            this.detailSubscription.unsubscribe();
        super.destroy();
    }
}
