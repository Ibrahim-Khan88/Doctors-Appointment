import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-appointment-information',
  templateUrl: './show-appointment-information.component.html',
  styleUrls: ['./show-appointment-information.component.css']
})
export class ShowAppointmentInformationComponent implements OnInit {

  sdfs = 'dfd';
  appointmentInfo;
  constructor() { }

  ngOnInit() {
    //this.appointmentInfo.firstname = 'Ibrahim'
    this.appointmentInfo = {
      firstName : 'ibrahim'
    }
  }

}
