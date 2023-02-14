import {Group} from "./group.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

export class GroupService{

  constructor(private http:HttpClient  ) { }

  private groups:any = [] ;

  private APP_URL = 'https://api-test.cloudfiler.io/groups';
  private token = "Bearer  a5618824-8381-4394-ae42-dc9974e67091";



  getGroups(){
    return this.http.get ( this.APP_URL , {
      headers: {  "Authorization": this.token}
    }).
    pipe(
      map( (responseData:any) => {
        return   responseData;
      })
    );
  }
}
