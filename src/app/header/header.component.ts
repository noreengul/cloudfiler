import { Component, OnInit } from '@angular/core';
import {LocationService} from "../locations/location.service";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //this.userService.getUserInfo().subscribe(user => {

    //});
  }


}
