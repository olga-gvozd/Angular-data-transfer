import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../common.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  @Output() sentData: EventEmitter<string> = new EventEmitter();

  isShownActions = true;


  constructor(
    private userService: UserService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  sendDataToParent(value: string): void {
    this.sentData.emit(value);
  }

  getData():string {
    return this.userService.getDataFromLeft();
  }

  getParentDataBSubject(): BehaviorSubject<string> {
    return this.commonService.dataBehSubject;
  }

}
