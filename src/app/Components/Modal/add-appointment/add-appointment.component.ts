import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointment : FormGroup;
  constructor(private fb: FormBuilder) { }
  minDate = new Date();
  maxDate =  new Date(this.minDate.getFullYear(), 11, 31);

  ngOnInit() {
    this.appointment = this.fb.group({
      'firstName' : ['', [Validators.required, Validators.maxLength(5)]],
      'lastName' : ['', [Validators.required, Validators.maxLength(5)]],
      'email' : ['', [Validators.email, Validators.required]],
      'gender' : [''],
      'age' : [''],
      'date' : ['', [Validators.required]],
      'time' : ['', [Validators.required]],
    });

    this.appointment.get('firstName').valueChanges.subscribe(data => {

    });
  }

  addAppointment(){

  }
}
