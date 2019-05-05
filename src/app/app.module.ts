import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    NavComponent,
    HomeComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
