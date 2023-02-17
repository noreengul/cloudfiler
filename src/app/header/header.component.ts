import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from "../locations/location.service";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetail: any ;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log("------user header-----");
    console.log(this.userDetail);
    this.userService.getUserInfo().subscribe(user => {
      console.log("-------app--------");
      console.log(user);
      this.userDetail = user ;
      this.userService.updateUserData(user);
    });
  }

}
