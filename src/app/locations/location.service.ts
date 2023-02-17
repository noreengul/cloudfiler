import {Location} from "./location.model";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {AuthService} from "../shared/auth.sevice";

@Injectable({
  providedIn: 'root'
})
export class LocationService{

    constructor(private http:HttpClient  , private authService: AuthService   ) { }
    private  locations:any;
    APP_URL = this.authService.getBaseURl();
    token =  this.authService.getToken();
    getLocations(){

        return this.http.get ( this.APP_URL +'locations/access?all_groups=true', {
            headers: {  "Authorization": this.token}
        }).
        pipe(
            map( (responseData:any) => {
                return   responseData;
            })
        );
    }
    addLocation(newLocation : string){

        const body =  ({ description: newLocation,sync_path:'' });

        return this.http.post( this.APP_URL +'locations',  (body),{
            headers: { "Authorization": this.token }
        });
   }
    updateLocation(location:any){

        return this.http.put(this.APP_URL+ 'locations/'+location.id,location,{
            headers: {  "Authorization": this.token }
        });
    }

    deleteLocation(id:string){

        return this.http.delete( this.APP_URL+'locations/'+id,{
            headers: {  "Authorization": this.token }
        });
    }

   getLocation(id:string){

    return this.http.get ( this.APP_URL+'locations/'+id , {
      headers: {  "Authorization": this.token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      })
    );
   }
}
