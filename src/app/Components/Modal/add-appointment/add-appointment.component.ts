import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointment: FormGroup;
  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear(), 11, 31);

  constructor(private fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddAppointmentComponent>) { }

  ngOnInit() {
    this.appointment = this.fb.group({
      'firstName': ['', [Validators.required, Validators.maxLength(40)]],
      'lastName': ['', [Validators.required, Validators.maxLength(40)]],
      'email': ['', [Validators.email]],
      'gender': [''],
      'mobile': ['', [Validators.required]],
      'address': [''],
      'age': [''],
      'date': ['', [Validators.required]],
      'time': ['', [Validators.required]],
    });
  }

  submit() {
    let data = this.appointment.getRawValue();
    this.changeHourAndMinuteOfGivenTime(data);
    this._dialogRef.close({ data: data });
  }

  changeHourAndMinuteOfGivenTime(data) {
    let timeWithHourAndMinute = data.time.split(":");
    let d = new Date(data.date);
    d.setHours(timeWithHourAndMinute[0]);
    d.setMinutes(timeWithHourAndMinute[1]);
    data.date = d.toISOString();
  }
}
