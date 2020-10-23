import { Component, OnInit} from "@angular/core";
import { UserViewComponent } from '../registration/users/view/user-view.component';
import { user } from '@rx/security';
import { ApplicationBroadcaster } from '@rx/core';
import { RxSpinner } from '@rx/view';

@Component({
    templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
    test:any[];
    isAdmin: boolean;
    showComponent: boolean;
    constructor( private applicationBroadCaster: ApplicationBroadcaster,private spinner : RxSpinner) {
        
    }
    ngOnInit(){
        this.applicationBroadCaster.loginHeaderBroadCast(true);
        this.showComponent = true;
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
        }
}
