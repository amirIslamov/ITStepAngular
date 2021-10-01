import {NgModule} from "@angular/core";
import {UsersComponent} from "./components/users/users.component";
import {UsersService} from "./services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {UserItemComponent} from './components/user-item/user-item.component';
import {AddUserFormComponent} from './components/add-user-form/add-user-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [UsersComponent, UserItemComponent, AddUserFormComponent],
  providers: [UsersService],
  exports: [UsersComponent]
})
export class UsersModule {

}
