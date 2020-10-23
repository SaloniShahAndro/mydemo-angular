import { Component, OnInit, OnDestroy,  Input,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {RxToast, RxDialog, DialogClick } from '@rx/view';

import { UserOrder } from 'src/app/database-models';
import { UserOrdersService } from '../user-orders.service';
import { UserOrderDomain } from '../domain/user-order.domain';
import { user } from '@rx/security';


@Component({
    templateUrl: './user-order-list.component.html',
})
export class UserOrderListComponent extends UserOrderDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    userOrders: UserOrder[];
    listSubscription: Subscription;
	@Input()  userId :number;

    constructor(
        private userOrdersService: UserOrdersService,    
        private dialog: RxDialog,
		private router: Router,
    ) { super();
    this.userId= user.data['userId'];
    }

    ngOnInit(): void {
        if (this.listSubscription)
            this.listSubscription.unsubscribe();
            this.listSubscription = this.userOrdersService.get(this.userId).subscribe(userOrders => {

                this.userOrders = userOrders;
                this.showComponent = true;
            });
    }

    ngOnDestroy(): void {
        if (this.listSubscription)
            this.listSubscription.unsubscribe();
        super.destroy();
    }
}
