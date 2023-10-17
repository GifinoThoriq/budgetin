import { Component, Input, EventEmitter, Output } from '@angular/core';
type BudgetType = 'default' | 'expense' | 'income';
@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css'],
})
export class BudgetFormComponent {
  @Input() editing: boolean = false;
  @Input() itemName: string = '';
  @Input() price: number = 0;
  @Input() date: string = '';
  @Input() budgetType: BudgetType = 'default';

  @Output() addBudgetEvent = new EventEmitter();
  @Output() editBudgetEvent = new EventEmitter();
  @Output() cancelEditBudgetEvent = new EventEmitter();
  @Output() updateItemNameEvent = new EventEmitter();
  @Output() updatePriceEvent = new EventEmitter();
  @Output() updateDateEvent = new EventEmitter();
  @Output() updateBudgetTypeEvent = new EventEmitter();

  addBudget() {
    this.addBudgetEvent.emit();
  }

  editBudget() {
    this.editBudgetEvent.emit();
  }

  cancelEditBudget() {
    this.cancelEditBudgetEvent.emit();
  }

  updateItemName() {
    this.updateItemNameEvent.emit(this.itemName);
  }
  updatePrice() {
    this.updatePriceEvent.emit(this.price);
  }
  updateDate() {
    this.updateDateEvent.emit(this.date);
  }
  updateBudgetType() {
    this.updateBudgetTypeEvent.emit(this.budgetType);
  }
}
