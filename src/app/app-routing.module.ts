import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from "./locations/locations.component";
import {AccountsComponent} from "./accounts/accounts.component";

const routes: Routes = [
  { path: '', component: LocationsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'accounts', component: AccountsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
