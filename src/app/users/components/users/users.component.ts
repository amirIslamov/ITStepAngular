import { Component, OnInit } from '@angular/core';
import {CreateUserDto, EditUserDto, User, UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService
      .getUsers()
      .subscribe((users => this.users = users))
  }

  removeUser(id: number): void {
    this.usersService.removeUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id != id);
    })
  }

  editUser([id, user]: [number, EditUserDto]): void {
    this.usersService.editUser(id, user).subscribe();
  }

  addUser(user: CreateUserDto): void {
    this.usersService.addUser(user).subscribe((responseUser) => {
      this.users = [...this.users, responseUser]
    })
  }
}
