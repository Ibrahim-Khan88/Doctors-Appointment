import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appiontment';
import { AppiontmentService } from 'src/app/Service/appiontment.service';
import { AddAppointmentComponent } from '../Modal/add-appointment/add-appointment.component';
import { ShowAppointmentInformationComponent } from '../Modal/show-appointment-information/show-appointment-information.component';
import { MonthInformation } from 'src/app/Constant/Constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectedMonth = {
    number: 0,
    fullName: "",
    shortName: "",
    numberOfDay: 0
  };
  appointmentInfo: Appointment[];
  monthInformation = MonthInformation;
  renderedData: any[] = [];

  constructor(private _dialog: MatDialog,
    private snackbar: MatSnackBar,
    private appiontmentService: AppiontmentService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.appointmentInfo = this.appiontmentService.loadTempData();
    this.activatedRoute.params.subscribe(paramData => {
      this.selectedMonth = this.monthInformation.find(data => data.number == paramData['id']);
      this.assignData();
    });
  }

  assignData() {
    var cloneData = this.appointmentInfo.slice();
    for (var i = 0; i < this.selectedMonth.numberOfDay; i++) {
      this.renderedData[i] = this.getAppiontmentData(i + 1, cloneData);
    }
  }

  getAppiontmentData(day: number, cloneData) {
    const temp = cloneData.filter(data => {
      const d = new Date(data.date);
      if (this.selectedMonth.number === (d.getMonth() + 1) && day === d.getDate())
        return true;
      else false;
    });
    temp.sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return temp;
  }

  changedMonth(monthNumber) {
    this.route.navigate([`/month/${monthNumber}`]);
  }

  numberReturn() {
    return new Array(this.selectedMonth.numberOfDay);
  }

  openCreateAppiontmentModal() {
    this._dialog.open(AddAppointmentComponent, {
      width: '600px'
    }).afterClosed().subscribe(({ data }) => {
      if (data) {
        this.appointmentInfo.push(data);
        this.assignData();
        this.snackbar.open('Saved Successfully', '', {
          duration: 4000,
        });
      }
    });
  }

  openAppiontmentDetailModal(i, j) {
    this._dialog.open(ShowAppointmentInformationComponent, {
      width: '600px',
      data: this.renderedData[i][j],
    });
  }

}
