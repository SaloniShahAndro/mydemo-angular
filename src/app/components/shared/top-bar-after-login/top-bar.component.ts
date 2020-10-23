import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { RxStorage } from '@rx/storage';

import { UserAuthorizationService } from '../../../domain/authorization/user-authorization.service';
import { ApplicationBroadcaster } from '@rx/core';
import { user } from '@rx/security';

@Component({
  selector: 'app-top-bar-after-login',
  templateUrl: './top-bar.component.html',
})
export class TopBarAfterLoginComponent implements OnInit {
  isLoggedin: boolean;
  isShowDashboard: boolean;
  showHeader: boolean = true;
  userData:any;
  isVisibleSidebar: boolean;
  constructor(private storage: RxStorage, private userAuthorizationService: UserAuthorizationService, private applicationBroadcaster: ApplicationBroadcaster,) {

    applicationBroadcaster.loginHeaderSubscriber.subscribe(t => {      
      this.showHeader = t;
      
    })
    applicationBroadcaster.loginSubscriber.subscribe(t=>{
      this.ngOnInit();
    })
    applicationBroadcaster.refreshSidebarSubscriber.subscribe(t=>{
      this.ngOnInit();
  })

  }
  SidebarToggle(){
if(!this.isVisibleSidebar)
document.body.classList.add("show_sidebar")
else
document.body.classList.remove("show_sidebar")

this.isVisibleSidebar = !this.isVisibleSidebar;
  }
  ngOnInit(): void {
    this.userData = user.data;
    var auth = this.storage.local.get("auth");
   
    if (auth) {
       this.isLoggedin = true;
    }
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
}
