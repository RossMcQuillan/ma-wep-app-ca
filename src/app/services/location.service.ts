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
    return this.http.get('//api.fabweb.ie/response/prices/');
  }

  getLocation(id: number) {
    return this.http.get(`//api.fabweb.ie/response/price/${id}`);
  }

}
