import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material';
import { AuthenticationService } from './authentication-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  hide = true;
  returnUrl: string;
  model: any = {};
  loading = false;

  @Input('label')
   textLabel= "Login page"
   selectedIndex = 0;

  constructor(public route: ActivatedRoute,
              public router: Router,
              public authenticationService: AuthenticationService) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onLoggedin() {
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
  }
}
