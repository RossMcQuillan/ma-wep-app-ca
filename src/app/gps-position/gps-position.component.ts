import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps-position',
  templateUrl: './gps-position.component.html',
  styleUrls: ['./gps-position.component.scss']
})
export class GpsPositionComponent implements OnInit {

 // google maps zoom level
 zoom: number = 18;
 lat: number;
 lng: number;

  constructor() { }

  ngOnInit() {
     this.getPosition();
  }

  
  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
