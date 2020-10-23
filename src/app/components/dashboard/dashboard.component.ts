import { Component, OnInit} from "@angular/core";
import { UserViewComponent } from '../registration/users/view/user-view.component';
import { user } from '@rx/security';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit {
    test:any[];
    isAdmin: boolean;
    showComponent: boolean;
    constructor( private applicationBroadCaster: ApplicationBroadcaster,) {
        
    }
    ngOnInit(){
        this.isAdmin = user.data['role'] == 1 ? true  : false;
        this.showComponent = true;
//this.test = [{"id":1,"name":"ishani"},{"id":2,"name":"ishani2"},{"id":3,"name":"ishani3"},{"id":4,"name":"ishani4"},{"id":5,"name":"ishani5"},{"id":6,"name":"ishani6"}]
    }
}
