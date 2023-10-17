import { Component, Input, EventEmitter, Output } from '@angular/core';
type BudgetType = 'default' | 'expense' | 'income';
interface BudgetTypes {
  id: number;
  itemName: string;
  date: string;
  price: number;
  budgetType: BudgetType;
}
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
})
export class BudgetListComponent {
  @Input() budget: BudgetTypes = {
    id: 0,
    itemName: '',
    date: '',
    price: 0,
    budgetType: 'default',
  };

  @Output() startEditBudgetEvent = new EventEmitter();
  @Output() deleteBudgetEvent = new EventEmitter();

  startEditBudget(budget: BudgetTypes) {
    this.startEditBudgetEvent.emit(budget);
  }

  deleteBudget(budget: BudgetTypes) {
    this.deleteBudgetEvent.emit(budget);
  }
}
