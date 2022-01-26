import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  @Input() getUserData: any;

  dataToService: string;
  leftInputData: FormControl;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initControl();
  }

  private initControl(): void {
    this.leftInputData = new FormControl;
  }

  sendToService(): void {
    this.dataToService = this.leftInputData.value;
    this.userService.setDataFromLeft(this.dataToService);
  }
}
