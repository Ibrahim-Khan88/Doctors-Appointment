import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appiontment';
import { AppiontmentService } from 'src/app/Service/appiontment.service';
import { AddAppointmentComponent } from '../Modal/add-appointment/add-appointment.component';
import { ShowAppointmentInformationComponent } from '../Modal/show-appointment-information/show-appointment-information.component';
import { MonthInformation } from 'src/app/Constant/Constant';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public selectedMonth = {
    number: 0,
    fullName: "",
    shortName: "",
    numberOfDay: 0
  };
  public monthInformation = MonthInformation;
  public renderedData: any[] = [];
  public daysNumberOfMonth: number[] = [];
  public isLoading: boolean;

  constructor(private _dialog: MatDialog,
    private snackbar: MatSnackBar,
    private appiontmentService: AppiontmentService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.subscribeToActivatedRoute();
  }

  private subscribeToActivatedRoute(){
    this.activatedRoute.params.subscribe(paramData => {
      this.isLoading = true;
      this.selectedMonth = this.monthInformation.find(data => data.number == paramData['id']);
      this.getAppiontmentData(this.selectedMonth.number);
      this.updateMonthNumberValue();
    });
  }

  private getAppiontmentData(day: number) {
    this.appiontmentService.getAppiontments(day).pipe(take(1)).subscribe((response: any) => {
      debugger;
      this.renderedData = response.data;
      this.isLoading = false;
    })
  }

  public changedMonth(monthNumber) {
    this.route.navigate([`/month/${monthNumber}`]);
  }

  private updateMonthNumberValue() {
    return this.daysNumberOfMonth = new Array(this.selectedMonth.numberOfDay);
  }

  public openCreateAppiontmentModal() {
    this._dialog.open(AddAppointmentComponent, {
      width: '600px'
    }).afterClosed().subscribe(({ data }) => {
      if (data) {
        this.saveAppiotnment(data);
        this.isLoading = true;
      }
    });
  }

  saveAppiotnment(appiontment){
    this.appiontmentService.saveAppiontment(appiontment).pipe(take(1)).subscribe(response=>{
      this.getAppiontmentData(this.selectedMonth.number);
      this.snackbar.open('Saved Successfully', '', {
        duration: 4000,
      });
    })
  }

  public openAppiontmentDetailModal(i, j) {
    this._dialog.open(ShowAppointmentInformationComponent, {
      width: '600px',
      data: this.renderedData[i][j],
    });
  }

  ngOnDestroy(): void {
  }

}
