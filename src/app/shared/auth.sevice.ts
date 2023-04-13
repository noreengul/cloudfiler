import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'https://api-test.cloudfiler.io/';
  //private token = "Bearer 8450b416-06e7-4dec-ae2e-52cb8166b275";
  private token = "";
  constructor(  private  route : ActivatedRoute,private router: Router) { }

  getToken(){
    return this.token;
  }

  setToken(token:any){
     this.token= token;
  }

  getBaseURl(){
    return this.BASE_URL;
  }
}
