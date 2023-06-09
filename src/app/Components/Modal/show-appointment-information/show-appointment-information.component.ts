import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-appointment-information',
  templateUrl: './show-appointment-information.component.html',
  styleUrls: ['./show-appointment-information.component.css']
})
export class ShowAppointmentInformationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public appointmentInfo: any) { }

  ngOnInit() {
  }

}
