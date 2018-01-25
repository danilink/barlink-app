import { Component } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from './expenses-services';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'barlink-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss'],
    providers: [ExpenseService]
})
export class ExpensesComponent {

private expenses: Expense[];

  constructor( private expenseService: ExpenseService) { }

    ngOnInit() {
      this.expenseService.getExpenses().subscribe(
              data => {
                this.expenses = data['expensesList']
                console.log(this.expenses)
              },
              error => console.log(error)
            );
    }

}
