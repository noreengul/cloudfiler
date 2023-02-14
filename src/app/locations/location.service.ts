import {Location} from "./location.model";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationService{

    constructor(private http:HttpClient  ) { }

    private  locations:any;

    private APP_URL = 'https://api-test.cloudfiler.io/locations';
    private token = "Bearer  a5618824-8381-4394-ae42-dc9974e67091";
    getLocations(){

        return this.http.get ( this.APP_URL +'/access', {
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

        return this.http.post( this.APP_URL ,  (body),{
            headers: { "Authorization": this.token }
        });
   }
    updateLocation(location:any){

        return this.http.put(this.APP_URL+ '/'+location.id,location,{
            headers: {  "Authorization": this.token }
        });
    }

    deleteLocation(id:string){

        return this.http.delete( this.APP_URL+'/'+id,{
            headers: {  "Authorization": this.token }
        });
    }

   getLocation(id:string){

    return this.http.get ( this.APP_URL+'/'+id , {
      headers: {  "Authorization": this.token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      })
    );
   }
}
