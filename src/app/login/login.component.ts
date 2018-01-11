import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  returnUrl: string;
  model: any = {};
  loading = false;

  @Input('label')
   textLabel= "Login page"
   selectedIndex = 0;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route

    .snapshot.queryParams['returnUrl'] || '/';
    console.log("login component")
     if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['expenses']);
     }
  }

  onLoggedin() {
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
  }

  login() {
    console.log("login oki")
      this.loading = true;
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['home']);
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
