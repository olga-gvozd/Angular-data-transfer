import { Component, OnDestroy, OnInit } from '@angular/core';
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

  private componentDestroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }

  goToParentState(): void {
    this.router.navigate(['parent']);
  }

  getUserData(): void {
    this.userService.getUserData()
      .pipe(takeUntil(this.componentDestroy$))
      .subscribe((response: UserResponse) => {
        this.data = response.data;
      });
  }

  getUserComments(): void {
    this.comments = this.userService.getCommentsData();
  }

}
