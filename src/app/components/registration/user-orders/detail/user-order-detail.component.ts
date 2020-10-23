import { Component, OnInit, OnDestroy,  Input,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {RxToast, RxDialog, DialogClick, RxPopup } from '@rx/view';

import { UserOrder } from 'src/app/database-models';
import { UserOrdersService } from '../user-orders.service';
import { UserOrderDomain } from '../domain/user-order.domain';
import { UserAuthorizationService } from 'src/app/domain/authorization';
import { RxStorage } from '@rx/storage';


@Component({
    templateUrl: './user-order-detail.component.html',
})
export class UserOrderDetailComponent extends UserOrderDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    userOrders: UserOrder[];
    detailSubscription: Subscription;
    
    @Input() isSucess : boolean;
    @Input() transactionId : boolean;

    constructor(
        private userOrdersService: UserOrdersService,    
        private userAuthorizationService: UserAuthorizationService,
        private storage: RxStorage,
        private dialog: RxDialog,
        private popup: RxPopup,
		private router: Router,
    ) { super();}

    ngOnInit(): void {
      
    }

    logOut(): void {
        this.userAuthorizationService.postLogOut().subscribe(t => {
          this.storage.local.clearAll();
          this.storage.session.clearAll();
          window.location.href = '/login';
        }, error => {
          this.storage.local.clearAll();
          this.storage.session.clearAll();
          window.location.href = '/login';
        })
      }

      closePopup(){
          this.popup.hide(UserOrderDetailComponent);
      }

    ngOnDestroy(): void {
        if (this.detailSubscription)
            this.detailSubscription.unsubscribe();
        super.destroy();
    }
}
