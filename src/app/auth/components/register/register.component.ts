import { Component, OnInit } from '@angular/core';
import {AuthService, RegisterModel} from '../../services/auth.service';
import {Router} from '@angular/router';
import config from '../../config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  registerModel: RegisterModel = {
    email: '',
    password: '',
    passwordConfirmation: '',
    username: ''
  };

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerModel)
      .subscribe(
        () => {
          this.router.navigate([config.loginUrl]);
        }
      );
  }
}
