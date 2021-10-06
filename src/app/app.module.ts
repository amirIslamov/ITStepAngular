import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProtectedModule} from './protected/protected.module';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ProtectedModule,
    AuthModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
