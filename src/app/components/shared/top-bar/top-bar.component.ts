import { Component,OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { RxStorage } from '@rx/storage';

import { UserAuthorizationService } from '../../../domain/authorization/user-authorization.service';
import { ApplicationBroadcaster } from '@rx/core';
import { user } from '@rx/security';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  isLoggedin: boolean;
  isShowDashboard: boolean;
  showHeader: boolean = true;
  userData:any;
  @Input() IsVisiable: boolean;
  constructor(private storage: RxStorage,private activatedRoute: ActivatedRoute,private userAuthorizationService: UserAuthorizationService, private applicationBroadcaster: ApplicationBroadcaster,private router:Router) {
    // this.applicationBroadcaster.loginHeaderSubscriber.subscribe(t =>{
    //   this.IsVisiable  = t;
    // })
    activatedRoute.params.subscribe((param: any) =>{} );
  }

  ngOnInit(): void {
    console.log(window.location.pathname)
    this.userData = user.data;
    this.applicationBroadcaster.loginHeaderSubscriber.subscribe(t =>{
      this.IsVisiable  = t;
    })
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

  scrolltoTop(e :any){
if(window.location.pathname=="/home"){
    e.preventDefault();
    // window.scrollTo(0,(e.view.window.innerWidth/2))
    window.scrollTo({
      top: e.view.window.innerWidth/2.3,
      left: 0,
      behavior: 'smooth'
    });
  }
  //   $('html, body').animate({
  //     scrollTop: $(".welcome_container ").offset().top - $("header.bg_gray").outerHeight()
  //   }, 1000);
  // });
  }


  redirectTo(path : string){
    this.userAuthorizationService.postLogOut().subscribe(t => {
      this.storage.local.clearAll();
      this.storage.session.clearAll();
      this.router.navigateByUrl(path)
    }, error => {
      this.storage.local.clearAll();
      this.storage.session.clearAll();
      this.router.navigateByUrl(path)
    })
  }
}
