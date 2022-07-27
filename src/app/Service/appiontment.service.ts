import { Injectable } from '@angular/core';
import { Appointment } from '../Model/Appiontment';

@Injectable({
  providedIn: 'root'
})
export class AppiontmentService {

  constructor() {}

  loadTempData(): Appointment[]{
    return [
      {
        id: 1,
        firstName: "Person 1 first Name",
        lastName: "Person 1 last name",
        email: "ppp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-26T09:48:00.000Z",
        time: "11:11"
      },
      {
        id: 2,
        firstName: "Person 2 first Name",
        lastName: "Person 2 last Name",
        email: "ppp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-26T08:50:00.000Z",
        time: "11:11"
      },
      {
        id: 3,
        firstName: "Person 3 first Name",
        lastName: "Person 3 last Name",
        email: "pp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-26T10:49:00.000Z",
        time: "11:11"
      },
      {
        id: 4,
        firstName: "Person 4 first Name",
        lastName: "Person 4 last Name",
        email: "pp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-27T08:52:00.000Z",
        time: "11:11"
      },
      {
        id: 5,
        firstName: "Person 5 first Name",
        lastName: "Person 5 last Name",
        email: "pp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-27T10:53:00.000Z",
        time: "11:11"
      },
      {
        id: 6,
        firstName: "Person 6 first Name",
        lastName: "Person 6 last Name",
        email: "pp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-07-27T09:53:00.000Z",
        time: "11:11"
      },
      {
        id: 7,
        firstName: "Person 7 first Name",
        lastName: "Person 7 last Name",
        email: "pp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-08-27T09:55:00.000Z",
        time: "11:11"
      },
      {
        id: 8,
        firstName: "Person 8 first Name",
        lastName: "Person 8 last Name",
        email: "pp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-08-27T11:56:00.000Z",
        time: "11:11"
      },
      {
        id: 9,
        firstName: "Person 9 first Name",
        lastName: "Person 9 last Name",
        email: "pp@gmail.com",
        age: 24,
        gender: "Male",
        date: "2022-02-01T08:00:00.000Z",
        time: "11:11"
      },
      {
        age: 22,
        date: "2022-07-29T18:22:00.000Z",
        email: "ff@ff",
        firstName: "Person 10 first Name",
        gender: "Male",
        lastName: "Person 10 last Name",
        time: "11:23",
      },
      {
        age: 22,
        date: "2022-07-01T09:29:00.000Z",
        email: "ff@ff",
        firstName: "Person first Name",
        gender: "Male",
        lastName: "Person last Name",
        time: "11:22",
      },
      {
        age: 22,
        date: "2022-07-01T11:29:00.000Z",
        email: "ff@ff",
        firstName: "Person first Name",
        gender: "Male",
        lastName: "Person last Name",
        time: "11:22",
      },
      {
        age: 22,
        date: "2022-07-01T16:29:00.000Z",
        email: "ff@ff",
        firstName: "Person 3 first Name",
        gender: "Male",
        lastName: "Person  last Name",
        time: "11:22",
      },
      {
        age: 22,
        date: "2022-07-03T19:29:00.000Z",
        email: "ff@ff",
        firstName: "Person 3 first Name",
        gender: "Male",
        lastName: "Person  last Name",
        time: "11:22",
      },
      {
        age: 22,
        date: "2022-07-03T17:29:00.000Z",
        email: "ff@ff",
        firstName: "Person 3 first Name",
        gender: "Male",
        lastName: "Person  last Name",
        time: "11:22",
      },
      {
        age: 22,
        date: "2022-07-03T13:29:00.000Z",
        email: "ff@ff",
        firstName: "Person 3 first Name",
        gender: "Male",
        lastName: "Person  last Name",
        time: "11:22",
      },
    ]
  }
}
