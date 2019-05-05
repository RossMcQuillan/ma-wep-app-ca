import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {
  // initial position
  public lat: Number = 24.799448;
  public lng: Number = 120.979021;

  public destLat: number;
  public destLng: number;

  public origin: any;
  public destination: any;


  constructor(
    private route       : ActivatedRoute,
    private browserHistory: Location
  ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.destLat = parseFloat(params.get('lat'));
      this.destLng = parseFloat(params.get('lng'));
      this.destination = { lat: this.destLat, lng: this.destLng }
    });

    this.getPosition(); 
   
  }

  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.origin = { 
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          console.log(this.origin);
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  goBack(): void {
    this.browserHistory.back();
  }

}
