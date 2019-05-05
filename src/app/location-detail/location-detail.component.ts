import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})

export class LocationDetailComponent implements OnInit {

  constructor(
    private location: Location
  ) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

}
