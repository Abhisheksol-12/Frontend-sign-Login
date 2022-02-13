import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskDashboardComponent } from './create-task-dashboard.component';

describe('CreateTaskDashboardComponent', () => {
  let component: CreateTaskDashboardComponent;
  let fixture: ComponentFixture<CreateTaskDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaskDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
