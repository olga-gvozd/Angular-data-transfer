import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

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
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  sendData(value: any): void {
    this.userData = value;
  }

  sendDataBSubject(value: string): void {
    this.commonService.setDataBSubject(value);
  }

  getSentData(value: string): void {
    this.rightUserData = value;
  }

  goToUsersState(): void {
    this.router.navigate(['users']);
  }

  goToFormState(): void {
    this.router.navigate(['form']);
  }
}

