import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

interface UserResponse {
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
export class UsersComponent implements OnInit {

  data: User[];
  comments: Comments[];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  goToParentState(): void {
    this.router.navigate(['parent']);
  }

  getUserData(): void {
    this.userService.getUserData()
      .subscribe((response: UserResponse) => {
        this.data = response.data;
      });
  }

  getUserComments(): void {
    this.userService.getCommentsData()
      .subscribe((response: UserResponse) => {
        this.comments = response.data;
      });
  }

}
