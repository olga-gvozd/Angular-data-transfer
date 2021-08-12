import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  @Input() getUserData: any;
  dataToService: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  sendToService(value: string): void {
    this.dataToService = value;
    this.userService.setDataFromLeft(this.dataToService);
  }
}
