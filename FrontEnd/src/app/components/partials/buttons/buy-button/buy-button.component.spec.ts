import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyButtonComponent } from './buy-button.component';

describe('BuyButtonComponent', () => {
  let component: BuyButtonComponent;
  let fixture: ComponentFixture<BuyButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyButtonComponent]
    });
    fixture = TestBed.createComponent(BuyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
