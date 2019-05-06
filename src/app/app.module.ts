import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationService }  from './services/location.service';
import { LocationsComponent } from './locations/locations.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { GpsPositionComponent } from './gps-position/gps-position.component';
import { DirectionComponent } from './direction/direction.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const translateModule = TranslateModule.forRoot({loader: {
  provide   : TranslateLoader,
  useFactory: HttpLoaderFactory,
  deps      : [HttpClient]
}});

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
    FormsModule,
    translateModule,
    AgmCoreModule.forRoot({  // @agm/core
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
    }),
    AgmDirectionModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),      // agm-direction
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
