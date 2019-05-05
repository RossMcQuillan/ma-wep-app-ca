import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(
    private http: HttpClient
  ) { }

  getLocations() {
    return this.http.get('http://localhost/jwt_generate/response/prices/');
  }

}
