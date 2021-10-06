import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedComponent } from './components/protected/protected.component';
import {ProtectedRouterModule} from './protected-router.module';



@NgModule({
  declarations: [ProtectedComponent],
  imports: [
    CommonModule,
    ProtectedRouterModule
  ]
})
export class ProtectedModule { }
