import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APP_URL = 'https://api-test.cloudfiler.io/users';
  private token = "Bearer  a5618824-8381-4394-ae42-dc9974e67091";
  constructor(private http:HttpClient  ) { }

  getUserInfo(){

    /*return this.http.get ( this.APP_URL , {
      headers: {  "Authorization": this.token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      })
    );*/
  }
}
