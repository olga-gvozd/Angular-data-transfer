import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  private two: string;

  constructor() { }

  setOne(value: string): void {
    this.two = value;
    console.log('two - ', value);
  }

  getTwo(): string {
    return this.two;
  }

}
