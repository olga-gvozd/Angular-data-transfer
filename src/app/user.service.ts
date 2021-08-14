import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from './users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dateForRight: string;

  constructor(
    private http: HttpClient
  ) { }

  setDataFromLeft(value: string): void {
    this.dateForRight = value;
  }

  getDataFromLeft(): string {
    return this.dateForRight;
  }

  getUserData(): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://gorest.co.in/public/v1/users');
  }

  getCommentsData(): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://gorest.co.in/public/v1/comments');
  }
}
