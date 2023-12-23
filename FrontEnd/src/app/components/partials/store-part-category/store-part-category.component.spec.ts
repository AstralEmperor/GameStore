import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePartCategoryComponent } from './store-part-category.component';

describe('StorePartCategoryComponent', () => {
  let component: StorePartCategoryComponent;
  let fixture: ComponentFixture<StorePartCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorePartCategoryComponent]
    });
    fixture = TestBed.createComponent(StorePartCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
