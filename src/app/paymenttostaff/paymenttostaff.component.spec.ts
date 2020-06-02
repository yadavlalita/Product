import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenttostaffComponent } from './paymenttostaff.component';

describe('PaymenttostaffComponent', () => {
  let component: PaymenttostaffComponent;
  let fixture: ComponentFixture<PaymenttostaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenttostaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenttostaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
