import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { GpsPositionComponent } from './gps-position/gps-position.component';
import { DirectionComponent } from './direction/direction.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    NavComponent,
    HomeComponent,
    LocationDetailComponent,
    GpsPositionComponent,
    DirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({  // @agm/core
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
    }),
    AgmDirectionModule,      // agm-direction
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
