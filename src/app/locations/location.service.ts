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
    getLocations(){

        return this.http.get ('https://api-test.cloudfiler.io/locations', {
            headers: {  "Authorization": 'Bearer  a5618824-8381-4394-ae42-dc9974e67091'}
        }).
        pipe(
            map( (responseData:any) => {
                return   responseData.results;
            })
        );
   }

  addLocation(newLocation : string){

       const body =  ({ description: newLocation,sync_path:'' });
       return this.http.post('https://api-test.cloudfiler.io/locations',  (body),{
            headers: {
              "Authorization": 'Bearer  a5618824-8381-4394-ae42-dc9974e67091',
            }
       });
   }

   updateLocation(id:string){

   }

   deleteLocation(id:string){

      return this.http.delete('https://api-test.cloudfiler.io/locations/'+id,{
        headers: {  "Authorization": 'Bearer  a5618824-8381-4394-ae42-dc9974e67091'}
      });
   }
}
