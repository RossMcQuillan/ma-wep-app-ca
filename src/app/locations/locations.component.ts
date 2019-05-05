import { Component, OnInit } from '@angular/core';
import { LocationService }  from '../services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  towns: any = null;;

  constructor(
    private locationData: LocationService
  ) { }

  ngOnInit() {

    // api data passed from location.service
    this.locationData.getAllLocations()
      .subscribe((response:any) => {
        this.towns = response
        console.log(this.towns);
    })
  }

}
