import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationsComponent } from './locations/locations.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AccountsComponent } from './accounts/accounts.component';
 import { AddLocationComponent } from './locations/add-location/add-location.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {LocationService} from "./locations/location.service";
import {GroupService} from "./shared/group.service";
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
import { HttpClientModule} from "@angular/common/http";
import { PathLocationComponent } from './locations/edit-location/path-location/path-location.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      LocationsComponent,
      MenuComponent,
      AccountsComponent,
      AddLocationComponent,
      EditLocationComponent,
      PathLocationComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [LocationService,GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
