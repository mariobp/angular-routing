import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  
  public users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}