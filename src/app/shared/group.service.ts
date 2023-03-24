import {Group} from "./group.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.sevice";

@Injectable({
  providedIn: 'root'
})
export class GroupService{

  constructor( private http:HttpClient, private authService: AuthService  ) { }
  private groups:any = [] ;
  APP_URL = this.authService.getBaseURl();
  Token =  this.authService.getToken();

  getGroups(){
    return this.http.get ( this.APP_URL +'groups' , {
      headers: {  "Authorization": "Bearer "+this.Token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      })
    );
  }
}
