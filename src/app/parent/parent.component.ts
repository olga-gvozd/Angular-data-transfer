import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  oldArray: string[] = [];
  userData: string;
  isShownActions=true;
  rightUserData: string;
  parentInputData: FormControl;

  constructor(
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.initControl();
  }

  private initControl(): void {
    this.parentInputData = new FormControl();
  }

  sendData(): void {
    this.userData = this.parentInputData.value;
  }

  sendDataBSubject(): void {
    this.commonService.setDataBSubject(this.parentInputData.value);
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

