import { Component} from '@angular/core';
import { RxStorage } from '@rx/storage';

@Component({
    selector: 'app-footer-bar',
    templateUrl: './footer-bar.component.html',
})
export class FooterBarComponent {
    currentYear: number; 
    isLoggedin: boolean;
    constructor(private storage: RxStorage,) {
    }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
        var auth = this.storage.local.get("auth");
    
        if (auth) {
            this.isLoggedin = true;
        }
    }
}