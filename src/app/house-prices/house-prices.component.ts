import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LocationService }  from '../services/location.service';

@Component({
  selector: 'app-house-prices',
  templateUrl: './house-prices.component.html',
  styleUrls: ['./house-prices.component.scss'],
  providers: [LocationService]
})
export class HousePricesComponent implements OnInit {
  housePrices: any = null;

  constructor(
    private router      : Router,
    private route       : ActivatedRoute,
    private browserHistory: Location,
    private locationData: LocationService
  ) { }

  ngOnInit() {
    this.getHousePriceData();
  }

  goBack(): void {
    this.browserHistory.back();
  }


  getHousePriceData() {
    this.housePrices = null;

    this.route.paramMap.subscribe(params => {

      // Reset twon to null
      this.housePrices = null;

      //get location id
      const id = parseInt(params.get('id'), 10);
      console.log(id);

      if (isNaN(id)) {
        return this.router.navigateByUrl('/locations');
      }

      this.locationData.getHousePriceByLocation(id)
        .subscribe((response :any) => {
          if (response.years !== undefined) {
            this.housePrices = response;
            console.log('house price in '+ this.housePrices.years[0].year);
          } else {
            return this.router.navigateByUrl('/locations');
          }  
        });
    });
  }

}
