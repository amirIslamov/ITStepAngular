import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService, LoginModel} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl!: string;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute
  ) { }

  loginModel: LoginModel = {
    username: '',
    password: ''
  };

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authService.login(this.loginModel)
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        }
      );
  }
}
