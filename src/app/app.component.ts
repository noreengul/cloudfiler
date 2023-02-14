import { Component } from '@angular/core';
import {LocationService} from "./locations/location.service";
import {GroupService} from "./shared/group.service";
import {UserService} from "./shared/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloudfiler';
  userInfo = '';

  constructor( private userService:UserService) {

  }
  ngOnInit(): void {

    this.userService.getUserInfo().subscribe(user => {
      console.log("---------------");
      console.log(user);
      this.userInfo = user ;

    });
  }



}
