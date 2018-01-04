import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input('label')
   textLabel= "Login page"

   selectedIndex = 0;

    model: any = {};
    loading = false;

    constructor(public router: Router) {}

    ngOnInit() {
      console.log("login component")
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    tabChanged(tabChangeEvent: MatTabChangeEvent): void {
      console.log(tabChangeEvent);
    }

    login() {
      console.log("login oki")
        this.loading = true;
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
