import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService }  from '../services/location.service';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
  providers: [LocationService]
})

export class LocationDetailComponent implements OnInit {

  // google maps zoom level
  zoom: number = 13;
  lat: number;
  lng: number;
  town: any = null;

  constructor(
    private router      : Router,
    private route       : ActivatedRoute,
    private locationData: LocationService
  ) {}

  ngOnInit() {  
    this.getLocationData();
  }

  getLocationData() {
    this.town = null;

    this.route.paramMap.subscribe(params => {

      // Reset twon to null
      this.town = null;

      //get location id
      const id = parseInt(params.get('id'), 10);

      if (isNaN(id)) {
        return this.router.navigateByUrl('/locations');
      }

      this.locationData.getLocation(id)
        .subscribe((response :any) => {
          if (response.location.id !== undefined) {
            this.town = response;
            this.lat = parseFloat(response.location.lat);
            this.lng = parseFloat(response.location.lng);
            console.log(this.town);
            console.log(this.lat);
            console.log(this.lng);
          } else {
            return this.router.navigateByUrl('/locations');
          }  
        });
    });
  }

}
