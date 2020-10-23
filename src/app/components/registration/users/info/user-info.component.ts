import { Component, OnInit, OnDestroy,  Input,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import {RxToast, RxDialog, DialogClick } from '@rx/view';

import { vUser } from 'src/app/database-models';
import { UsersService } from '../users.service';
import { UserDomain } from '../domain/user.domain';
import { user } from '@rx/security';
import { ChangePassword, UserLookupGroup } from '../domain/user.models';
import { FormGroup } from '@angular/forms';
import { RxValidation } from '@rx/forms';
import { ApplicationConfiguration } from '@rx/core';


@Component({
    templateUrl: './user-info.component.html',
})
export class UserInfoComponent extends UserDomain implements OnInit, OnDestroy {
    showComponent: boolean = false;
    users: vUser[];
    infoSubscription: Subscription;
    userId: any;
    userPassword: string;
    confirmPassword:string;
    changePassword:ChangePassword;
    changePasswordFormGroup: FormGroup;



    constructor(
        private validation: RxValidation,
        private usersService: UsersService,    
        private dialog: RxDialog,
        private router: Router,
        private toast:RxToast
    ) { super();
        this.userId = user.data['userId'];}

    ngOnInit(): void {
        if (this.infoSubscription)
            this.infoSubscription.unsubscribe();

        this.changePasswordFormGroup = this.validation.getFormGroup(new ChangePassword());
        this.showComponent = true;
    }

    changePasswords(){


        // var data = {
        //     "userPassword":userPassword,
        //     "confirmPassword":confirmPassword,
        // }
        this.infoSubscription = this.usersService.patch(this.userId,this.changePasswordFormGroup.value).subscribe(t=>{
            // this.router.navigate(['dashboard']);
            this.changePasswordFormGroup.reset();
            this.router.navigate(['dashboard']);
            this.toast.show(t.changePasswordMessage, { status: 'success' });
        },err=>{
          
        })


        
    }



    ngOnDestroy(): void {
        if (this.infoSubscription)
            this.infoSubscription.unsubscribe();
        super.destroy();
    }
}
