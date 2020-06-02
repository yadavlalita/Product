import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGetComponent } from './staff-get.component';

describe('StaffGetComponent', () => {
  let component: StaffGetComponent;
  let fixture: ComponentFixture<StaffGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
