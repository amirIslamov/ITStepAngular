import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CreateUserDto} from "../../services/users.service";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  @Output() added: EventEmitter<CreateUserDto> = new EventEmitter();

  user: CreateUserDto = {
    name: '',
    phone: '',
    email: '',
    website: '',
    username: ''
  }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    this.added.emit(this.user);
  }
}
