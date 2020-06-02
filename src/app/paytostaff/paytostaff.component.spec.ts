import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytostaffComponent } from './paytostaff.component';

describe('PaytostaffComponent', () => {
  let component: PaytostaffComponent;
  let fixture: ComponentFixture<PaytostaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytostaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytostaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
