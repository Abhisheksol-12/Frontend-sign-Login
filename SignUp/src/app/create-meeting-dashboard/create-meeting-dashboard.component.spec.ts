import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeetingDashboardComponent } from './create-meeting-dashboard.component';

describe('CreateMeetingDashboardComponent', () => {
  let component: CreateMeetingDashboardComponent;
  let fixture: ComponentFixture<CreateMeetingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMeetingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMeetingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
