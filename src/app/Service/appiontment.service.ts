import { Injectable } from '@angular/core';
import { Appointment } from '../Model/Appiontment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppiontmentService {

  private appiontmentUrl = "https://localhost:7037/api/Appointment"

  constructor(
    private http: HttpClient
  ) { }

  public getAppiontments(monthNumber: number) {
    return this.http.get(this.appiontmentUrl + "/" + monthNumber);
  }

  public saveAppiontment(data: any) {
    return this.http.post(this.appiontmentUrl, data);
  }
}
