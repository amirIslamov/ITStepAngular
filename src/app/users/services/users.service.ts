import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { usersBackendUrl } from "./config.json"

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

interface Address {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": GeoPosition
}

interface GeoPosition {
  lat: number,
  lng: number
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

export type CreateUserDto = Omit<User, 'id'>;
export type EditUserDto = Partial<CreateUserDto>;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private client: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(usersBackendUrl)
  }

  editUser(id: number, editUserDto: EditUserDto): Observable<{}> {
    return this.client.patch(`${usersBackendUrl}/${id}`, editUserDto);
  }

  addUser(createUserDto: CreateUserDto): Observable<{}> {
    return this.client.post(usersBackendUrl, createUserDto)
  }

  removeUser(id: number): Observable<{}> {
    return this.client.delete(`${usersBackendUrl}/${id}`);
  }
}
