import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { RxToast, RxDialog, DialogClick } from '@rx/view';

import { User, vUser } from 'src/app/database-models';
import { UsersService } from '../users.service';
import { UserDomain } from '../domain/user.domain';
import { user } from '@rx/security';
import { AddressTypeEnum, OrderStatusEnum } from 'src/app/enums';
import { RegistrationLookups } from 'src/app/lookups/registration-lookups';


@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
})
export class UserViewComponent extends UserDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    // users: User[];
    viewSubscription: Subscription;
    userId: any;
    users: vUser;
    age: number;
    addresstype: typeof AddressTypeEnum;
    orderstatus: typeof OrderStatusEnum;

    constructor(
        private usersService: UsersService,
        private dialog: RxDialog,
        private router: Router,
    ) { super(); 
        this.userId = user.data['userId'];}

    ngOnInit(): void {
        if (this.viewSubscription)
            this.viewSubscription.unsubscribe();
           

            this.usersService.filterLookup(RegistrationLookups.userOrderLookups,[this.userId]).subscribe(t=> {
               
                if(t[0]["orderId"] == 0 || t[0]["paymentStatus"] == 15){                
                   this.router.navigateByUrl("/user-orders/info");
                }
                else{
                    this.viewSubscription = this.usersService.getBy([this.userId]).subscribe(t => {
                        this.users = t;
                   
                        this.age = t['dob']==null? null : new Date().getFullYear() - new Date(t['dob']).getFullYear();
                        
                       
                        this.users.userEducations =(JSON.parse(t.userEducations)[0]);
                        this.users.userPhonenumber =(JSON.parse(t.userPhonenumber)[0]);
                        this.users.userAddress= (JSON.parse(t.userAddress)[0]);
                        this.addresstype = AddressTypeEnum;
                        this.orderstatus = OrderStatusEnum;
                        this.showComponent = true;
                    }, err => {
                       
                    }
                    );
                }
                
            });           
    



       
    }



    ngOnDestroy(): void {
        if (this.viewSubscription)
            this.viewSubscription.unsubscribe();
        super.destroy();
    }
}
