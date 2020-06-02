import { Component, OnInit } from '@angular/core';
import User from '../user';
import { UsersService } from '../user.servise';

@Component({
  selector: 'app-userget',
  templateUrl: './userget.component.html',
  styleUrls: ['./userget.component.css']
})
export class UsergetComponent implements OnInit {
  users: User[];

  constructor(private ps: UsersService) { }

  ngOnInit() {
    this.ps
    .getusers()
    .subscribe((data: User[]) => {
      this.users = data;
  });
  }


  deleteuser(id) {
    this.ps.deleteuser(id).subscribe(res => {
      this.users.splice(id, 1);
    });
  }
}