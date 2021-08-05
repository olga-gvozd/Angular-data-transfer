import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dateForRight: string;

  constructor() { }

  setDataFromLeft(value: string): void {
    this.dateForRight = value;
  }

  getDataFromLeft(): string {
    return this.dateForRight;
  }
}
