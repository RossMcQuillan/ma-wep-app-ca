import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { GpsPositionComponent } from './gps-position/gps-position.component';
import { DirectionComponent } from './direction/direction.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: LocationsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: LocationDetailComponent },
  { path: 'location/:name/direction/:lat/:lng', component: DirectionComponent },
  { path: 'my-position', component: GpsPositionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
