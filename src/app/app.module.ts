import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider'
import { AddAppointmentComponent } from './Components/Modal/add-appointment/add-appointment.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ShowAppointmentInformationComponent } from './Components/Modal/show-appointment-information/show-appointment-information.component';
import { LandingComponent } from './Components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'month/:id',
    component: HomeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    AddAppointmentComponent,
    ShowAppointmentInformationComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatDividerModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatSnackBarModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddAppointmentComponent, ShowAppointmentInformationComponent]
})
export class AppModule { }
