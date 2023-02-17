import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AuthService} from "./auth.sevice";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient , private authService :AuthService ) { }
  APP_URL = this.authService.getBaseURl();
  token =  this.authService.getToken();
  private userData = new Subject<any>();

  data$ = this.userData.asObservable();

  updateUserData(data: any) {
    this.userData.next(data);
  }

  getUserInfo(){

    return this.http.get ( this.APP_URL + 'user' , {
      headers: {  "Authorization": this.token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      })
    );
  }

}
