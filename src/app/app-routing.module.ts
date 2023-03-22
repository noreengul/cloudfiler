import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from "./locations/locations.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {GroupsComponent} from "./groups/groups.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {AccessdeniedComponent} from "./accessdenied/accessdenied.component";

const routes: Routes = [
  { path: '', component: LocationsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'notfound', pathMatch: 'full',
    component: PagenotfoundComponent },
  { path: 'accessdenied', pathMatch: 'full',
    component: AccessdeniedComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
