import {Component, Injectable, OnInit} from '@angular/core';

import  {Location} from "./location.model";
import {LocationService} from "./location.service";
import {Group} from "../shared/group.model";
import {GroupService} from "../shared/group.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {

  searchTerm:any;
  selectLocation:any;
  locations !: any;

  isLoading!:true;
  groups !: Group[];
  constructor( private locationService:LocationService,private groupService:GroupService) {

    console.log('aaaaaaaaaaaaaaaaaa');
  }

  ngOnInit(): void {

      this.locationService.getLocations().subscribe(locations => {
          this.locations = locations;
      });
      this.groups = this.groupService.getGroups();

     //this.getData();

     /* console.log("bbbbbbbbbbb");
      console.log(this.locations);
      this.locations = this.locationService.getLocations();
      this.groups = this.groupService.getGroups();
      console.log('test');
      console.log( this.locations);
      this.selectLocation='';*/
  }

  deleteLocation(selectedIndex:number){

    this.selectLocation=this.locations[selectedIndex];
    this.locationService.deleteLocation(this.selectLocation.id).subscribe(locations => {
      this.locations.splice(selectedIndex, 1);
    });
  }

  addLocation(newLocation : string){

     this.locationService.addLocation(newLocation).subscribe(responseData => {
        this.locationService.getLocations().subscribe(locations => {
           this.locations = locations;
        });
     });

  }



search(value:string){

//this.locations = this.locationService.getLocations();
//this.locations = this.locations.filter((locationData:any) =>
   // locationData.description.toLowerCase().includes(value)
//);
}
}
