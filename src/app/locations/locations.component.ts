import { Component, OnInit } from '@angular/core';
import { LocationService }  from '../services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  towns: any = null;
  checked;
  saved: Array<Object>;

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


  isSaved(value: string): boolean {
    let ids = JSON.parse(localStorage.getItem("ids"));
    if (ids.length > 0) {
      for (let i = 0; i < ids.length; i++) {
        if(ids[i] == value) {
            return true;
        } 
      }
    }
  }


  toggleVisibility(e: any) {
    //console.log(e.target.value); //return value 2
    //console.log(e.target.checked);  //returns true / false
    //localStorage.clear();
    this.saved = JSON.parse(localStorage.getItem("ids")) || [];
    // if array is not empty
    // check for dublicate
    if(this.saved.length)  {
      for (let i = 0; i < this.saved.length; i++) {
        if(this.saved[i] == e.target.value) {
          // if checked do nothing 
            let index = this.saved.indexOf(this.saved[i]);
            this.saved.splice(index, 1); 
            localStorage.setItem('ids', JSON.stringify(this.saved));
            return;
        } 
      }
      this.saved.push(e.target.value);
    } else {
      // if array is empty
      this.saved.push(e.target.value);
    }
    localStorage.setItem('ids', JSON.stringify(this.saved));
  }
 
}
