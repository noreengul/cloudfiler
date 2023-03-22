import { Component } from '@angular/core';
import {LocationService} from "./locations/location.service";
import {GroupService} from "./shared/group.service";
import {UserService} from "./shared/user.service";
import {ActivatedRoute, Router,RoutesRecognized,Event} from "@angular/router";
import {AuthService} from "./shared/auth.sevice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloudfiler';


  constructor( private  route : ActivatedRoute , private authService: AuthService , private router : Router  ) {
    console.log('Environment config');
  }
  ngOnInit(): void {

    let token = this.getParameterByName('access_token');
    if(token){
      this.authService.setToken("Bearer "+token);
    }
  }


  getParameterByName(name: any) {
    let url = window.location.href;
    name = name.replace(/[[]]/g, "\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2]);
  }



}

