import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';

export interface UserResponse {
  data: any;
  meta: any;
}
interface User {
  email: string;
  gender: string;
  id: number;
  name: string;
  status: string;
}
interface Comments {
  body: string;
  email: string;
  id: number;
  name: string;
  post_id: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  data: User[];
  comments: Observable<UserResponse>;
  isShown: boolean = true;
  isShownData: boolean = true;
  inputData: string;
  user: FormGroup;

  private componentDestroy$: ReplaySubject<void> = new ReplaySubject();
  

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }

  goToParentState(): void {
    this.router.navigate(['parent']);
  }

  getUserData(): void {
    if (this.user.valid){
      this.userService.getUserData()
        .pipe(takeUntil(this.componentDestroy$))
        .subscribe((response: UserResponse) => {
          this.data = response.data;
        });
    }
  }

  getUserComments(): void {
    this.comments = this.userService.getCommentsData();
  }

  private initForm(): void {
    this.user = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.min(18), Validators.required]],
      gender: ['', Validators.required],
    });
  }

  setDefaultData(): void {
    this.user.get('name').setValue('Kate');
    this.user.get('age').setValue('18');
    this.user.get('gender').setValue('female');
  }

  getInputData(): void {
    if (this.user.valid) {
      const name = this.user.get('name').value;
      const age = this.user.get('age').value;
      const gender = this.user.get('gender').value;
      this.inputData = `${name} ${age} ${gender}`;
    }
  }
}
