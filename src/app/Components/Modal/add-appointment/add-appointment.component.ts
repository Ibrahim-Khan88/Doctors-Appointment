import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointment : FormGroup;
  minDate = new Date();
  maxDate =  new Date(this.minDate.getFullYear(), 11, 31);

  constructor(private fb: FormBuilder, 
    private _dialogRef: MatDialogRef<AddAppointmentComponent>) { }

  ngOnInit() {
    this.appointment = this.fb.group({
      'firstName' : ['ff', [Validators.required, Validators.maxLength(5)]],
      'lastName' : ['ff', [Validators.required, Validators.maxLength(5)]],
      'email' : ['ff@ff', [Validators.email, Validators.required]],
      'gender' : [''],
      'age' : ['22'],
      'date' : ['7/29/2022', [Validators.required]],
      'time' : ['11:22', [Validators.required]],
    });

    this.appointment.get('firstName').valueChanges.subscribe(data => {

    });
  }

  addAppointment(){
    this._dialogRef.close({success: true});
  }
}
