import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() userDetail:User[];
  allUser=[];
  constructor() { }

  ngOnInit(): void {
    for(let a in this.userDetail){
      this.allUser.push(this.userDetail[a]);
    }
  }

}
