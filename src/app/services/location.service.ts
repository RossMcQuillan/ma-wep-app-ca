import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(
    private http: HttpClient
  ) { }

  getAllLocations() {
    return this.http.get('https://api.fabweb.ie/response/locations/');
  }

  getLocation(id: number) {
    return this.http.get(`https://api.fabweb.ie/response/location/${id}`);
  }

  getHousePriceByLocation(id: number) {
    return this.http.get(`https://api.fabweb.ie/response/housing-prices/${id}`);
  }

 
}
 