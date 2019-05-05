import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  // App name shown in the header
  appTitle:string = 'My Web App'; 

  constructor() { }

  ngOnInit() {
  }

}
