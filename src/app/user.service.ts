import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getUserData(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v1/users');
  }

  getCommentsData(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v1/comments');
  }
}
