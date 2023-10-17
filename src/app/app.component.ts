import { Component, Input } from '@angular/core';

type BudgetType = 'default' | 'expense' | 'income';

interface BudgetTypes {
  id: number;
  itemName: string;
  date: string;
  price: number;
  budgetType: BudgetType;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'budgetin';

  editing = false;
  editedId = 0;

  @Input()
  sortByDate = '';
  itemName = '';
  date = '';
  price = 0;
  budgetType: BudgetType = 'default';

  budgets: BudgetTypes[] = [
    {
      id: Math.random(),
      itemName: 'Nasi Kandar',
      date: '2023-10-18',
      price: 12,
      budgetType: 'expense',
    },
    {
      id: Math.random(),
      itemName: 'Grab Car',
      date: '2023-10-15',
      price: 10,
      budgetType: 'expense',
    },
    {
      id: Math.random(),
      itemName: 'Freelance',
      date: '2023-10-01',
      price: 500,
      budgetType: 'income',
    },
  ];

  get budgetAll() {
    if (this.sortByDate.trim().length > 0) {
      return this.budgets.filter((budget) => budget.date === this.sortByDate);
    }
    return this.budgets;
  }

  updateSortByDate(date: string) {
    this.sortByDate = date;
  }

  updateItemName(itemName: string) {
    this.itemName = itemName;
  }

  updatePrice(price: number) {
    this.price = price;
  }

  updateDate(date: string) {
    this.date = date;
  }

  updateBudgetType(type: BudgetType) {
    this.budgetType = type;
  }

  clearSort() {
    this.sortByDate = '';
  }

  addBudget() {
    this.budgetAll.push({
      id: Math.random(),
      itemName: this.itemName,
      date: this.date,
      budgetType: this.budgetType,
      price: this.price,
    });
    this.clearForm();
  }

  deleteBudget(budget: BudgetTypes) {
    this.budgets = this.budgets.filter((item) => item.id !== budget.id);
  }

  startEditBudget(budget: BudgetTypes) {
    this.itemName = budget.itemName;
    this.price = budget.price;
    this.budgetType = budget.budgetType;
    this.date = budget.date;
    this.editedId = budget.id;
    this.editing = true;
  }

  editBudget() {
    this.budgets.forEach((e, i) => {
      if (e.id === this.editedId) {
        this.budgets[i].itemName = this.itemName;
        this.budgets[i].date = this.date;
        this.budgets[i].price = this.price;
        this.budgets[i].budgetType = this.budgetType;
      }
    });
    this.editing = false;
    this.editedId = 0;
    this.clearForm();
  }

  cancelEditBudget() {
    this.editing = false;
    this.editedId = 0;
    this.clearForm();
  }

  clearForm() {
    this.itemName = '';
    this.date = '';
    this.price = 0;
    this.budgetType = 'default';
  }
}
