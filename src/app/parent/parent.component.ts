import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  oldArray: string[] = [];
  userData: any;
  isShownActions=true;
  rightUserData: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendData(value: any): void {
    this.userData = value;
    console.log(value);
  }

  getSentData(value: string): void {
    this.rightUserData = value;
  }

  goToUsersState(): void {
    this.router.navigate(['users']);
  }
}

