import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinBookComponent } from './checkin-book.component';

describe('CheckinBookComponent', () => {
  let component: CheckinBookComponent;
  let fixture: ComponentFixture<CheckinBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinBookComponent]
    });
    fixture = TestBed.createComponent(CheckinBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
