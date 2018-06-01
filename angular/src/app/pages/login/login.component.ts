import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './user';
import { first } from 'rxjs/operators';
import { AlertService } from '../../_services/alert.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  model: any = {};
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService, private alertService: AlertService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    $('body').addClass('empty-layout bg-silver-300');
  }

  get f() { return this.loginForm.controls; }
  login() {

    //this.router.navigate(['/vendor']);
    //this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }

  onSubmit() {
    this.submitted = true;
    console.log('ngSubmit called');
    // stop here if form is invalid
    if (this.loginForm.invalid) {
    console.log('notvalid called');
      
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log('ngSubmit inside called');

          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
  ngAfterViewInit() {
    $('#login-form').validate({
      errorClass: "help-block",
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
        },
      },
      highlight: function (e) {
        $(e).closest(".form-group").addClass("has-error")
      },
      unhighlight: function (e) {
        $(e).closest(".form-group").removeClass("has-error")
      },
    });
  }

  ngOnDestroy() {
    $('body').removeClass('empty-layout bg-silver-300');
  }

}
