import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditUserDto, User} from "../../services/users.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user!: User;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<[number, EditUserDto]> = new EventEmitter<[number, EditUserDto]>()

  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleRemove(): void {
    this.remove.emit(this.user.id);
  }

  handleEdit(): void {
    this.edit.emit([this.user.id, this.user]);
    this.toggleEdit();
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
  }
}
