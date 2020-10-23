import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class ApplicationBroadcaster {
  private loginSubject: Subject<boolean> = new Subject<boolean>();

  public loginSubscriber: Observable<boolean>;

  private allTypeSubject: Subject<boolean> = new Subject<any>();

  public allTypeSubscriber: Observable<any>;

  public loginHeaderSubject: Subject<boolean> = new Subject<boolean>();

  public loginHeaderSubscriber: Observable<boolean>;

  private configurationSubject: Subject<boolean> = new Subject<boolean>();

  public configurationSubscriber: Observable<boolean>;

  private refreshMessageSubject: Subject<boolean> = new Subject<boolean>();

  public refreshMessageSubscriber: Observable<boolean>;

  private hideSidebarSubject: Subject<boolean> = new Subject<boolean>();

  public hideSidebarSubscriber: Observable<boolean>;

  private refreshSidebarSubject: Subject<boolean> = new Subject<boolean>();

  public refreshSidebarSubscriber: Observable<boolean>;

  private refreshTopbarSubject: Subject<boolean> = new Subject<boolean>();

  public refreshTopbarSubscriber: Observable<boolean>;

  constructor() {
    this.loginSubscriber = this.loginSubject.asObservable();
    this.loginHeaderSubscriber = this.loginHeaderSubject.asObservable();
    this.allTypeSubscriber = this.allTypeSubject.asObservable();
    this.configurationSubscriber = this.configurationSubject.asObservable();
    this.refreshMessageSubscriber = this.refreshMessageSubject.asObservable();
    this.hideSidebarSubscriber = this.hideSidebarSubject.asObservable();
    this.refreshSidebarSubscriber = this.refreshSidebarSubject.asObservable();
    this.refreshTopbarSubscriber = this.refreshTopbarSubject.asObservable();
    
  }

  refreshTopbarBroadcast(value:boolean):void{
    this.refreshTopbarSubject.next(value);
  }
  refreshSidebarBroadcast(value:boolean):void{
    this.refreshSidebarSubject.next(value);
  }
  refreshMessageBroadcast(value:boolean):void{
    this.refreshMessageSubject.next(value);
  }

hideSidebarBroadcast(value:boolean):void{
    this.hideSidebarSubject.next(value);
  }
  
  loginBroadCast(value: boolean): void {
    this.loginSubject.next(value);
  }
  loginHeaderBroadCast(value: boolean): void {
    this.loginHeaderSubject.next(value);
  }

  allTypeBroadCast(value: any): void {
    this.allTypeSubject.next(value);
  }

  configurationBroadCast(value: boolean): void {
    this.configurationSubject.next(value);
  }
}
