import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RxStorage } from '@rx/storage';
import { ApplicationBroadcaster } from '@rx/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { user } from '@rx/security';
import { UserMessagesService } from '../../user-message/user-messages/user-messages.service';
import { UserMessage } from 'src/app/database-models';
import { Subscription } from 'rxjs/Subscription';
import { UserMessageLookups } from 'src/app/lookups';
import { MessagesCountService } from './messages-count.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit { 
  activeMenu: string = 'dashboard';
  toggleMenu: boolean;
  activeSubMenu: string;
  userId: number;
  userRole: any;
  adminMessagesCount: number;
  userMessagesCount: number;
  showComponent: boolean;

  
  constructor(
    private messagesCountService: MessagesCountService,
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private applicationBroadCaster: ApplicationBroadcaster,
    private storage: RxStorage) {
      this.userId = user.data['userId'];
      this.userRole = user.data['role'];      
      applicationBroadCaster.allTypeSubscriber.subscribe(t => {      
      
        if (t && t.Action.action == "changeActiveMenu" && t.value != null) {
          this.changeActiveMenu(t.value[0]);
          this.changeActiveSubMenu(t.value[1])
        }
      })
      applicationBroadCaster.hideSidebarSubscriber.subscribe(t => {
        document.body.classList.add("show_sidebar");
      })
      applicationBroadCaster.refreshSidebarSubscriber.subscribe(t=>{
        this.ngOnInit();
    })
      
      
    }

  ngOnInit(): void {   
    this.toggleMenu = true; 
    if (this.storage.session.get("selectedRootModule") == undefined) {    
      this.activeSubMenu = '';
    }
    else {     
      this.activeSubMenu = this.storage.session.get("selectedRootModule");
      this.activeMenu = this.storage.session.get("selectedModule");
    }
    this.messageCount()
    
    
  }
  messageCount(){
    if(this.userRole==2){
    this.messagesCountService.filterLookup(UserMessageLookups.userMessagesCountLookups,[this.userId]).subscribe(t=> {
        if(t["length"] > 0){                

            this.userMessagesCount = t[0].isUserRead;
            this.showComponent = true; 
        }
        else{
            this.userMessagesCount = 0;
            this.showComponent = false
        }
    })            
    }
    else{
      this.showComponent = false;
      this.messagesCountService.lookup([UserMessageLookups.adminMessagesCountLookups]).then(t=> { 
        if(t["adminMessagesCountLookups"][0].totalCount>0) {        
          this.adminMessagesCount = t["adminMessagesCountLookups"][0].totalCount;  
            this.showComponent = true; 
        }
    }) 
    }
   }

  redirectToBesure(){
    window.location.href="https://besurebackgroundchecks.com";

  }

  changeActiveMenu(activeMenu: string): void {    
    if (this.activeMenu == activeMenu) {
      this.toggleMenu = !this.toggleMenu;
    } else {
      this.toggleMenu = true;
      this.activeMenu = activeMenu;
      this.storage.session.save("selectedModule", activeMenu);
    }
  }

  changeActiveSubMenu(activeSubMenu: string): void {    
    this.activeSubMenu = activeSubMenu;
    this.storage.session.save("selectedRootModule", activeSubMenu);
  }

}
