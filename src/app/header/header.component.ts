import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from "../locations/location.service";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() userDropDownData: any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
     console.log("------user-----");
    console.log(this.userDropDownData);
  }

}
