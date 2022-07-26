import { Injectable } from '@angular/core';
import { Appointment } from '../Model/Appiontment';

@Injectable({
  providedIn: 'root'
})
export class AppiontmentService {

  constructor() { }


  getData(): Appointment[]{
    return [
      {
        id: 1,
        firstName: "Ibrahim 2-26",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-26T09:48:00.000Z",
        sortedDate: "2022-07-26T09:48:00.000Z",
        time: "11:11 PM"
      },
      {
        id: 2,
        firstName: "Ibrahim 1-26",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-26T08:50:00.000Z",
        sortedDate: "2022-07-26T08:50:00.000Z",
        time: "11:11 PM"
      },
      {
        id: 3,
        firstName: "Ibrahim 3-26",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-26T10:49:00.000Z",
        sortedDate: "2022-07-26T10:49:00.000Z",
        time: "11:11 PM"
      },
      {
        id: 4,
        firstName: "Ibrahim 1-27",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-27T08:52:00.000Z",
        sortedDate: "2022-07-27T08:52:00.000Z",
        time: "11:11 PM"
      },
      {
        id: 5,
        firstName: "Ibrahim 3-27",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-27T10:53:00.000Z",
        sortedDate: "2022-07-27T10:53:00.000Z",
        time: "11:11 PM"
      },
      {
        id: 6,
        firstName: "Ibrahim 2-27",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-27T09:53:00.000Z",
        sortedDate: "2022-07-27T09:53:00.000Z",
        time: "11:11 PM"
      },
      {
        id: 7,
        firstName: "Ibrahim 2-27-08 mas",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-08-27T09:55:00.000Z",
        sortedDate: "2022-08-27T09:55:00.000Z",
        time: "11:11 PM"
      },
      {
        id: 8,
        firstName: "Ibrahim 4-27-08 mas",
        lastName: "Khan",
        email: "ibrahim@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-08-27T11:56:00.000Z",
        sortedDate: "2022-08-27T11:56:00.000Z",
        time: "11:11 PM"
      }
    ]
  }

}
