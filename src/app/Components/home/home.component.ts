import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appiontment';
import { AppiontmentService } from 'src/app/Service/appiontment.service';
import { AddAppointmentComponent } from '../Modal/add-appointment/add-appointment.component';
import { ShowAppointmentInformationComponent } from '../Modal/show-appointment-information/show-appointment-information.component';

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
  monthInformation : any[];
  renderedData: any[] = [];

  constructor(private _dialog: MatDialog,
    private snackbar: MatSnackBar,
    private appiontmentService: AppiontmentService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    console.log("called");
    this.monthInformationInitialization();
    this.selectedMonth = this.monthInformation.find(data => data.number === +this.activatedRoute.snapshot.params['id']);
    console.log(JSON.stringify(this.selectedMonth));
    this.appointmentInfo = this.appiontmentService.getData();
    this.assignData();
    //this.getAppiontmentData(27);
  }

  assignData(){
    for (var i=0; i<this.selectedMonth.numberOfDay; i++){
     this.renderedData[i] = this.getAppiontmentData(i);
    //this.renderedData[i] = 0;
      console.log(i, this.renderedData[i].length);
    }
  }

  getAppiontmentData(day : number){
    const temp = this.appointmentInfo.filter(data => {
      const d = new Date(data.date);
      if (this.selectedMonth.number === (d.getMonth()+1) && day === d.getDate())
        return true;
      else false;
    });
   // console.log(temp.length, new Date(temp[0].date).getDate());
    temp.sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return temp;
   // console.log(this.appointmentInfo.length, this.appointmentInfo[0].id);
   // console.log(temp.length, temp[0].id);
  }

  changedMonth(monthNumber){
    this.route.navigate([`/month/${monthNumber}`]);
  }

  monthInformationInitialization(){
    this.monthInformation = [
      {
        number: 1,
        fullName: "January",
        shortName: "Jan",
        numberOfDay: 31
      },
      {
        number: 2,
        fullName: "February",
        shortName: "Feb",
        numberOfDay: 28
      },
      {
        number: 3,
        fullName: "March",
        shortName: "Mar",
        numberOfDay: 31
      },
      {
        number: 4,
        fullName: "April",
        shortName: "Apr",
        numberOfDay: 30
      },
      {
        number: 5,
        fullName: "May",
        shortName: "May",
        numberOfDay: 31
      },
      {
        number: 6,
        fullName: "June",
        shortName: "Jun",
        numberOfDay: 30
      },
      {
        number: 7,
        fullName: "July",
        shortName: "Jul",
        numberOfDay: 31
      },
      {
        number: 8,
        fullName: "August",
        shortName: "Aug",
        numberOfDay: 31
      },
      {
        number: 9,
        fullName: "September",
        shortName: "Sep",
        numberOfDay: 30
      },
      {
        number: 10,
        fullName: "October",
        shortName: "Oct",
        numberOfDay: 31
      },
      {
        number: 11,
        fullName: "November",
        shortName: "Nov",
        numberOfDay: 30
      },
      {
        number: 12,
        fullName: "December",
        shortName: "Dec",
        numberOfDay: 31
      }
    ];
  }

  numberReturn(){
    return new Array(this.selectedMonth.numberOfDay);
  }

  openCreateAppiontmentModal() {
    this._dialog.open(AddAppointmentComponent, {
      width: '600px'
    }).afterClosed().subscribe(async ({ success }) => {
      if (success) {
        this.snackbar.open('Saved Successfully', '', {
          duration: 4000,
        });
      }
      // else {
      //   this.snackbar.open('Something Went Wrong!', '', {
      //     duration: 4000,
      //   });
      // }
    });
  }

  openAppiontmentDetailModal(id) {
    this._dialog.open(ShowAppointmentInformationComponent, {
      width: '600px'
    });
  }

}
