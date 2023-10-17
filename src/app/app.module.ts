import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetSortComponent } from './budget-sort/budget-sort.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';

@NgModule({
  declarations: [AppComponent, BudgetListComponent, BudgetSortComponent, BudgetFormComponent],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
