import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.css']
})
export class UserDetailListComponent implements OnInit {
  user:User[];
  constructor() { }

  ngOnInit(): void {
    this.user=[{
      userName:"S.M. Emrul Bahar",
      userId:1,
      userEmail:"tutulaiub@gmail.com"
    }]
    console
  }

}
