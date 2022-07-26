import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  template: '',
})
export class LandingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    const date = new Date();
    this.route.navigate([`/month/${(date.getMonth()+1)}`])
  }

}
