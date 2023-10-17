import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-budget-sort',
  templateUrl: './budget-sort.component.html',
  styleUrls: ['./budget-sort.component.css'],
})
export class BudgetSortComponent {
  @Input() sortByDate: any;

  @Output() clearSortEvent = new EventEmitter();
  @Output() updateSortByDateEvent = new EventEmitter();

  clearSort() {
    this.clearSortEvent.emit();
  }

  updateSortByDate() {
    this.updateSortByDateEvent.emit(this.sortByDate);
  }
}
