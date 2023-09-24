import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBookComponent } from './checkout-book.component';

describe('CheckoutBookComponent', () => {
  let component: CheckoutBookComponent;
  let fixture: ComponentFixture<CheckoutBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutBookComponent]
    });
    fixture = TestBed.createComponent(CheckoutBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
