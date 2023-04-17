import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from "./locations/locations.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {GroupsComponent} from "./groups/groups.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {AccessdeniedComponent} from "./accessdenied/accessdenied.component";
import {LicenseComponent} from "./license/license.component";
import {SettingsComponent} from "./settings/settings.component";
import {YoursettingsComponent} from "./yoursettings/yoursettings.component";
import {YourprivatesettingsComponent} from "./yourprivatesettings/yourprivatesettings.component";
import { ManagersComponent } from './managers/managers.component';

const routes: Routes = [
  { path: '', component: LocationsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'managers', component: ManagersComponent },
  { path: 'your-settings', component: YoursettingsComponent},
  { path: 'license', component: LicenseComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'your-private-settings', component: YourprivatesettingsComponent},

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
