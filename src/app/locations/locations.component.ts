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
  locationsPermanent !:any ;
  totalLocations !: any;

  isLoading!:true;
  groups !: Group[];
  constructor( private locationService:LocationService,private groupService:GroupService) {

  }

  ngOnInit(): void {

      this.locationService.getLocations().subscribe(locations => {
          this.locations = locations.results;
          this.locationsPermanent = locations.results;
          this.totalLocations=locations.total;
      });
    console.log("----------------");
      this.groupService.getGroups().subscribe(groups => {
         this.groups = groups;

         console.log(this.groups);

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

    if(this.locations[0].description){
        this.locations.filter( (locationTest:any) => {
          return locationTest.location_id==1;
        })
    }
    if( value!==undefined && value!='' && value !=null) {
      this.locations = this.locations.filter((locationData: any) =>
        locationData.description.toLowerCase().includes(value.toLowerCase())
      );
    }else{
      this.locations= this.locationsPermanent;
    }
  }

  filterGroups(groups:any  ) : any {

    //return groups.map((groupData:any)=>{ if(groupData.group_id  === group_id) return groupData.permission })
  }
}
