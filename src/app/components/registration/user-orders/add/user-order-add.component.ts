import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { RxMessageComponent } from '@rx/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { ComponentCanDeactivate, ApplicationBroadcaster } from "@rx/core";
import { RxToast, RxDialog, DialogClick, RxPopup } from '@rx/view';
import { RxValidation } from '@rx/forms';
import { UserOrder, UserCardDetail, } from 'src/app/database-models';
import { RegistrationLookups } from 'src/app/lookups';
import { UserOrdersService } from '../user-orders.service';
import { UserOrderDomain } from '../domain/user-order.domain';
import { UserOrderLookupGroup } from '../domain/user-order.models';
import { user } from '@rx/security';
import { UserOrderDetailComponent } from 'src/app/components/registration/user-orders/detail/user-order-detail.component';
import { PaymentStatusEnum, OrderStatusEnum } from '../../../../enums';
import { UsersService } from '../../users/users.service';
@Component({
    templateUrl: './user-order-add.component.html',
    entryComponents: [RxMessageComponent, UserOrderDetailComponent]
})
export class UserOrderAddComponent extends UserOrderDomain implements OnInit, OnDestroy, ComponentCanDeactivate {
    showComponent: boolean = false;
    userOrderFormGroup: FormGroup;
    addSubscription: Subscription;
    userOrderLookupGroup: UserOrderLookupGroup;
    userOrder: any;
    userCardDetail: UserCardDetail[] = [];
    orderId = [];
    userCardDetailFormGroup: FormGroup;
    ordersFormGroup: FormGroup;
    cardDetailsFormGroup: FormGroup;
    isClicked: boolean = false;
    @Input() userId: number;
    stateList: { "stateName": string; "stateId": number; }[] = [];
    constructor(
        private validation: RxValidation,
        private router: Router,
        private toast: RxToast,
        private popup: RxPopup,
        private componentFactoryResolver: ComponentFactoryResolver,
        private userOrdersService: UserOrdersService,
        private applicationBroadCaster: ApplicationBroadcaster,
        private usersService: UsersService
    ) {
        super();
        this.popup.setComponent(componentFactoryResolver);
        this.userId = user.data['userId']
        applicationBroadCaster.hideSidebarBroadcast(false);
    }
    ngOnInit(): void {
        this.isClicked = false;
        this.userOrderLookupGroup = new UserOrderLookupGroup();
        //this.userOrderLookupGroup.userCardDetail = new UserCardDetail();
        //this.userOrderLookupGroup.userOrder = new UserOrder();
        this.userOrderFormGroup = this.validation.getFormGroup(new UserOrder());
        this.userCardDetailFormGroup = this.validation.getFormGroup(new UserCardDetail());
        this.orderId = ["4"]
        this.usersService.filterLookup(RegistrationLookups.statesLookups, []).subscribe((response: any) => {
            this.stateList = response;
            this.addSubscription = this.userOrdersService.getBy(this.userId, this.orderId).subscribe(data => {
                this.userOrder = data;
                this.userCardDetailFormGroup.controls.userId.setValue(this.userOrder.userId);
                this.userCardDetailFormGroup.controls.cardType.setValue("visa");
                this.userCardDetailFormGroup.controls.createdBy.setValue(this.userId);
                this.userCardDetailFormGroup.controls.createdOn.setValue(new Date());
                this.userOrderFormGroup.controls.userId.setValue(this.userOrder.userId);
                this.userOrderFormGroup.controls.paymentStatus.setValue(PaymentStatusEnum.Pending);
                this.userOrderFormGroup.controls.packageId.setValue(this.userOrder.packageId);
                this.userOrderFormGroup.controls.orderId.setValue(this.userOrder.orderId);
                this.userOrderFormGroup.controls.createdBy.setValue(this.userId);
                this.userOrderFormGroup.controls.createdOn.setValue(new Date());
                this.userOrderFormGroup.controls.orderStatus.setValue(OrderStatusEnum.InProgress);
                this.showComponent = true;
            });
        })
    }
    addUserOrder(): void {
        this.isClicked = true;
        this.userOrderLookupGroup.userCardDetail = this.userCardDetailFormGroup.value;
        this.userOrderLookupGroup.userOrder = this.userOrderFormGroup.value;
        this.addSubscription = this.userOrdersService.post(this.userId, this.userOrderLookupGroup).subscribe(t => {
            //        this.popup.show(UserOrderDetailComponent, { isSucess:t.userOrder.UserOrder.PaymentStatus }).then(t => this.ngOnInit());
            this.popup.show(UserOrderDetailComponent, { isSucess: t.issucess, transactionId: t.transactionId }).then(t => this.ngOnInit());
            this.popup.show(UserOrderDetailComponent, { isSucess: t.issucess, transactionId: t.transactionId }).then(t => this.ngOnInit());
        },
            error => {
            })
    }
    canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        return !this.userOrderFormGroup.dirty;
    }
    ngOnDestroy(): void {
        if (this.addSubscription)
            this.addSubscription.unsubscribe();
        super.destroy();
    }
}
