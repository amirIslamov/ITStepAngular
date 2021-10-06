import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {AuthService, TokenData} from '../services/auth.service';
import config from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userSubject = new BehaviorSubject<TokenData>(null);

    this.authService.tokenData$.subscribe(userSubject);

    const user = userSubject.value;

    if (user) {
      return true;
    }

    this.router.navigate([config.loginUrl], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
