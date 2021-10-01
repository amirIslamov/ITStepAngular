import {NgModule} from "@angular/core";
import {UsersComponent} from "./components/users/users.component";
import {UsersService} from "./services/users.service";
import {HttpClientModule} from "@angular/common/http";
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  imports: [HttpClientModule],
  declarations: [UsersComponent, UserItemComponent],
  providers: [UsersService],
  exports: [UsersComponent]
})
export class UsersModule {

}
