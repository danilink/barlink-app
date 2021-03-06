import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material';
import { AuthenticationService } from './../auth/authentication.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  form: FormGroup;
  registerForm: FormGroup;

  @Input('label')
   textLabel= "Login"
   selectedIndex = 0;

  constructor(public route: ActivatedRoute,
              public router: Router,
              public authenticationService: AuthenticationService,
              public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required]]});

      this.registerForm = this.formBuilder.group({
        name: [null, Validators.required],
        surname: [null, Validators.required],
        username: [null, Validators.required],
        email: [null, Validators.required, Validators.email],
        role: [null, Validators.required],
        password: [null, Validators.required],
        passwordbis: [null, Validators.required]
      });
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onLoggedin() {
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 1) {
      console.log("tab register selected")
    }
  }

  register() {
    this.loading = true;
    if (this.registerForm.valid) {
      let form = new FormData();
      console.log(this.registerForm.value);
      this.authenticationService.register(this.registerForm.value)
      .subscribe(data => {
        console.log(data)
      }, 
      error => {
        console.log("error")
      })

    } else {
      this.loading = false;
      return;
    }
            
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.form.get('username').value, this.form.get('password').value)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  isFieldValidRegister(field: string) {
    return !this.registerForm.get(field).valid && this.registerForm.get(field).touched;
  }
}
