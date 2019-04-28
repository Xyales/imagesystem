import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcalendarComponent } from './reportcalendar.component';

describe('ReportcalendarComponent', () => {
  let component: ReportcalendarComponent;
  let fixture: ComponentFixture<ReportcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
