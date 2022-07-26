import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppointmentInformationComponent } from './show-appointment-information.component';

describe('ShowAppointmentInformationComponent', () => {
  let component: ShowAppointmentInformationComponent;
  let fixture: ComponentFixture<ShowAppointmentInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAppointmentInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAppointmentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
