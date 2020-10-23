import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { RxToast, RxDialog, DialogClick, RxPopup } from '@rx/view';

import { UserOrder, vPackageDetail, vPackageDetailsNew } from 'src/app/database-models';
// import { UserOrder } from '../../../../../app/database-models';
import { UserOrdersService } from '../user-orders.service';
import { UserOrderDomain } from '../domain/user-order.domain';
import { UsersService } from '../../users/users.service';
import { PaymentStatusEnum } from 'src/app/enums';
import { user } from '@rx/security';
import { UserOrderLookupGroup } from '../domain/user-order.models';
import { ApplicationBroadcaster } from '@rx/core';
import { UserOrderDetailComponent } from '../detail/user-order-detail.component';


@Component({
    templateUrl: './user-order-info.component.html',
    entryComponents : [UserOrderDetailComponent]
})
export class UserOrderInfoComponent extends UserOrderDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    // userOrders: UserOrder[];

    infoSubscription: Subscription;
    @Input() userId: number;

    uniquePackages: any[] = [];
    uniquePackageDetails: any[] = [];
    userOrderLookupGroup: UserOrderLookupGroup;
    isPaymentVerified: boolean = false;
    


    constructor(
        private userOrdersService: UserOrdersService,
        private dialog: RxDialog,
        private router: Router,
        private   applicationBroadCaster : ApplicationBroadcaster,
        private popup: RxPopup,
        private componentFactoryResolver: ComponentFactoryResolver,

        // private usersService:UsersService
    ) { super(); 
        this.popup.setComponent(componentFactoryResolver);
        applicationBroadCaster.hideSidebarBroadcast(false);
    }

    ngOnInit(): void {
        // this.userId;
        if (this.infoSubscription)
            this.infoSubscription.unsubscribe();
        // this.userId;
        // this.infoSubscription = this.userOrdersService.get(this.userId).subscribe(userOrders => {

        //     this.userOrders = userOrders;
        //     this.showComponent = true;
        // });


        this.userId = user.data['userId'];
        this.infoSubscription = this.userOrdersService.get(this.userId).subscribe(data => {

            this.uniquePackages = data;

            this.uniquePackageDetails = this.uniquePackages["packageDetails"];
            this.uniquePackages = this.uniquePackages["userPackages"];
            this.isPaymentVerified = data["isPaymentVerified"];
            this.showComponent = true;
        });
    }
    selectPackage(packageId: number) {

        let userOrder = new UserOrder();
        userOrder.packageId = packageId;
        userOrder.paymentStatus = PaymentStatusEnum.Pending;

        userOrder.createdBy = this.userId;
        userOrder.createdOn = new Date();
        userOrder.userId = this.userId;
  
            this.userOrderLookupGroup = new UserOrderLookupGroup();

            this.userOrderLookupGroup.userCardDetail = null;
            this.userOrderLookupGroup.userOrder = userOrder;

            this.infoSubscription = this.userOrdersService.post(this.userId, this.userOrderLookupGroup).subscribe(t => {
               if( t["issucess"]){
                this.popup.show(UserOrderDetailComponent, { isSucess:t.issucess,transactionId:t.transactionId }).then(t => this.ngOnInit());
                this.popup.show(UserOrderDetailComponent, { isSucess:t.issucess,transactionId:t.transactionId }).then(t => this.ngOnInit());
               }
               else{
                this.router.navigateByUrl("user-orders/add")
               }


                
            },
                error => {

                })

        }
    


    ngOnDestroy(): void {
                if(this.infoSubscription)
            this.infoSubscription.unsubscribe();
                super.destroy();
            }
}
