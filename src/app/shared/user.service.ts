import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {AuthService} from "./auth.sevice";
import { Subject } from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient , private authService :AuthService,private router: Router) { }
  APP_URL = this.authService.getBaseURl();
  token =  this.authService.getToken();
  private userData = new Subject<any>();

  data$ = this.userData.asObservable();

  updateUserData(data: any) {
    console.log("===============");
    console.log(data.is_manager);
    this.authService.setUserPersmission(data.is_manager ? 'manager':'user');
    this.userData.next(data);
  }

  getAllUsers(){

    this.token = this.authService.getToken();
    return this.http.get ( this.APP_URL +'users' , {
      headers: {  "Authorization": "Bearer "+this.token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      })
    );
  }

  getUserInfo(){

    this.token=this.authService.getToken();

    return this.http.get ( this.APP_URL + 'user' , {
      headers: {  "Authorization": "Bearer "+this.token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      }),
      catchError( err => {
        if (err.status === 401 || !this.token) {
          this.router.navigate(['accessdenied']);
        }
        this.router.navigate(['notfound']);
        const error = err.error.message || err.statusText;
        return  (error);
      })
    );
  }

}
