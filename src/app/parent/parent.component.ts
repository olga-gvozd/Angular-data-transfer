import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  userData: any;
  isShownActions=true;
  rightUserData: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendData(value: any): void {
    this.userData = value;
    console.log(value);
  }

  getSentData(value: string): void {
    this.rightUserData = value;
  }
}
