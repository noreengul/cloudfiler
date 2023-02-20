import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'https://api-dev.cloudfiler.io/';
  private token = "Bearer 8450b416-06e7-4dec-ae2e-52cb8166b275";
  constructor(   ) { }

  getToken(){
    return this.token;
  }

  getBaseURl(){
    return this.BASE_URL;
  }
}
