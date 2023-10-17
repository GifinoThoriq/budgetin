import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSortComponent } from './budget-sort.component';

describe('BudgetSortComponent', () => {
  let component: BudgetSortComponent;
  let fixture: ComponentFixture<BudgetSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetSortComponent]
    });
    fixture = TestBed.createComponent(BudgetSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
