import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivaboutComponent } from './univabout.component';

describe('UnivaboutComponent', () => {
  let component: UnivaboutComponent;
  let fixture: ComponentFixture<UnivaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
