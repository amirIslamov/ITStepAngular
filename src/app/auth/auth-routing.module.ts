import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule} from '@angular/router';
import {NotLoggedGuard} from './guards/not-logged.guard';
import {AuthComponent} from './components/auth/auth.component';

const routes = [
  {
    path: 'auth',
    canActivate: [NotLoggedGuard],
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotLoggedGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotLoggedGuard]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
