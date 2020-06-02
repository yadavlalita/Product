import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
        currentUser: User;

    constructor(
        //private loadingBar: SlimLoadingBarService,
        private router: Router,
        private authenticationService: AuthenticationService
    )
    /*{
        this.router.events.subscribe((event: Event) => {
          this.navigationInterceptor(event);
         });*/ {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }



}