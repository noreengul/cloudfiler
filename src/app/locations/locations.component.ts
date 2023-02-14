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
  openLocation:any;
  locations !: any;
  totalLocations !: any;

  isLoading!:true;
  groups !: Group[];
  constructor( private locationService:LocationService,private groupService:GroupService) {

  }

  ngOnInit(): void {

      this.locationService.getLocations().subscribe(locations => {
          this.locations = locations.results;
          this.totalLocations=locations.total;
      });

      this.groupService.getGroups().subscribe(groups => {
         this.groups = groups.results;

      });
  }

  deleteLocation(selectedIndex:number){

    this.openLocation=this.locations[selectedIndex];
    this.locationService.deleteLocation(this.openLocation.id).subscribe(locations => {
      this.locations.splice(selectedIndex, 1);
    });
  }

  addLocation(newLocation : string){

     this.locationService.addLocation(newLocation).subscribe(responseData => {
        this.locationService.getLocations().subscribe(locations => {
           this.locations = locations.results;
           this.totalLocations=locations.total;
        });
     });

  }

  updateLocation(Location:any){

    this.locationService.updateLocation(Location).subscribe(locations => {
      this.locationService.getLocations().subscribe(locations => {
        this.locations = locations.results;
        this.totalLocations=locations.total;
      });
    });
  }

  search(value:string){

  }
}
