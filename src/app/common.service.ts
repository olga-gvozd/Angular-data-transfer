import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private readonly dataBSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  
  private two: string;

  constructor() { }

  setOne(value: string): void {
    this.two = value;
    console.log('two - ', value);
  }

  getTwo(): string {
    return this.two;
  }

  setDataBSubject(value: string): void {
    this.dataBSubject.next(value);
  }

  get dataBehSubject(): BehaviorSubject<string> {
    return this.dataBSubject;
  }
}
