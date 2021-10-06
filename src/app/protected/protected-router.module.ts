import {NgModule} from '@angular/core';
import {ProtectedComponent} from './components/protected/protected.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../auth/guards/auth.guard';

const routes = [
  {
    path: '/',
    component: ProtectedComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProtectedRouterModule { }
