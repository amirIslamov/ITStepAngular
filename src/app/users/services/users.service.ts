import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
}

export type CreateUserDto = Omit<User, 'id'>;
export type EditUserDto = Partial<CreateUserDto>;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static readonly usersBackendUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private client: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(UsersService.usersBackendUrl)
  }

  editUser(id: number, editUserDto: EditUserDto): Observable<User> {
    return this.client.patch<User>(`${UsersService.usersBackendUrl}/${id}`, editUserDto);
  }

  addUser(createUserDto: CreateUserDto): Observable<User> {
    return this.client.post<User>(UsersService.usersBackendUrl, createUserDto)
  }

  removeUser(id: number): Observable<{}> {
    return this.client.delete(`${UsersService.usersBackendUrl}/${id}`);
  }
}
