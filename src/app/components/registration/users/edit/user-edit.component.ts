import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { RxMessageComponent } from '@rx/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { RxToast, RxDialog, DialogClick, RxPopup } from '@rx/view';
import { RxValidation } from '@rx/forms';
import { User, vUser, UserAddress, UserPhoneNumber, UserEducation, } from 'src/app/database-models';
import { RegistrationLookups } from 'src/app/lookups';
import { UsersService } from '../users.service';
import { UserDomain } from '../domain/user.domain';
import { UserLookupGroup } from '../domain/user.models';
import { GENDERS, US_STATES } from 'src/app/database-collections';
import { AddressTypeEnum } from '../../../../enums';
@Component({
    templateUrl: './user-edit.component.html',
    entryComponents: [RxMessageComponent]
})
export class UserEditComponent extends UserDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    userFormGroup: FormGroup;
    editSubscription: Subscription;
    userLookupGroup: UserLookupGroup;
    genderList: { "genderName": string; "genderId": number; }[];
    textObject: { [key: string]: any } = {};
    userAddressFormGroup: FormArray;
    stateList: { "stateName": string; "stateId": number; }[] = [];
    userId: number;
    constructor(
        private validation: RxValidation,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private toast: RxToast,
        private usersService: UsersService,
        private dialog: RxDialog,
        private popup: RxPopup
    ) {
        super();
        activatedRoute.params.subscribe((param: any) => this.userId = param['userId']);
    }
    ngOnInit(): void {
        this.usersService.filterLookup(RegistrationLookups.statesLookups, []).subscribe((response: any) => {
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
                        userAddress.push(new UserAddress(userAddressList[i]))
                    }
                    this.userLookupGroup.user.userAddresses = userAddress;
                    this.userLookupGroup.user.userPhoneNumbers = new Array<UserPhoneNumber>(userPhone);
                    this.userLookupGroup.user.userEducations = new Array<UserEducation>(userEducation);
                    this.userFormGroup = this.validation.getFormGroup(this.userLookupGroup.user);
                    this.userAddressFormGroup = (<FormArray>((this.userFormGroup).controls['userAddresses']));
                    this.userFormGroup.controls['userPassword'].setValidators(null);
                    this.showComponent = true;
                });
        })
    }
    addAddresses(): void {
        var data = new UserAddress();
        data.userAddressType = this.userAddressFormGroup.controls.length > 0 ? AddressTypeEnum.Past : AddressTypeEnum.Current
        // if(this.userAddressFormGroup.controls.length >0) data.userAddressType = AddressTypeEnum.Past
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
        this.editSubscription = this.usersService.put(this.userFormGroup.value).subscribe(t => {
            this.router.navigateByUrl('/user-orders/info')
        },
            error => {
                this.dialog.validation(error);
            })
    }
    canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        return !this.userFormGroup.dirty;
    }
    ngOnDestroy(): void {
        if (this.editSubscription)
            this.editSubscription.unsubscribe();
        super.destroy();
    }
}
