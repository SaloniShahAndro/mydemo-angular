import { Component, OnInit, OnDestroy,  Input,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {RxToast, RxDialog, DialogClick } from '@rx/view';

import { UserOrder } from 'src/app/database-models';
import { UserOrdersService } from '../user-orders.service';
import { UserOrderDomain } from '../domain/user-order.domain';
import { user } from '@rx/security';
import { RegistrationLookups } from 'src/app/lookups/registration-lookups';


@Component({
    selector:'app-user-order-view',
    templateUrl: './user-order-view.component.html',
})
export class UserOrderViewComponent extends UserOrderDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    userOrders: UserOrder[];
    viewSubscription: Subscription;
	@Input()  userId :number;
    statusCount: any;

    constructor(
        private userOrdersService: UserOrdersService,    
        private dialog: RxDialog,
		private router: Router,
    ) { super();
    this.userId = user.data['userId']
    }

    ngOnInit(): void {
        if (this.viewSubscription)
            this.viewSubscription.unsubscribe();
         this.userOrdersService.group(this.userId,[],[RegistrationLookups.adminStatusCountLookups]).then((userOrders:any) => {
            this.userOrders = userOrders.UserOrder;
            this.statusCount = userOrders.adminStatusCountLookups[0];
            console.log(userOrders);
            this.showComponent = true;
        });
        // this.viewSubscription = this.userOrdersService.lookup([RegistrationLookups.adminStatusCountLookups]).subscribe(userOrders => {

        //     this.userOrders = userOrders;
        //     this.showComponent = true;
        // });

    }



    ngOnDestroy(): void {
        if (this.viewSubscription)
            this.viewSubscription.unsubscribe();
        super.destroy();
    }
}
