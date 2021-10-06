import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Token {
  token: string;
}

export interface TokenData {
  qwe: string;
}

export interface LoginModel {
  username: string;
  password: string;
}

export interface RegisterModel {
  username: string;
  password: string;
  passwordConfirmation: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly client: HttpClient) { }
  private static readonly API_BASE_URL = 'localhost:5001/api/v1/auth';

  private _tokenSubject = new BehaviorSubject<Token>(null);

  token$ = this._tokenSubject.asObservable();
  tokenData$ = this.token$.pipe(
    map(AuthService.parseTokenData)
  );

  private static parseTokenData(token: Token): TokenData {
   return {
     qwe: 'qwe'
   };
  }

  login(model: LoginModel): Observable<Token> {
    return this.client.post<Token>(`${AuthService.API_BASE_URL}/login`, model);
  }

  register(model: RegisterModel): Observable<{  }> {
    return this.client.post(`${AuthService.API_BASE_URL}/register`, model);
  }
}
