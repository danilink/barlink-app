import { Component } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from './expenses-services';
import { Observable } from 'rxjs/Observable';
import { ExpenseDetailDialog } from './expense-detail.dialog'
import { MatDialog} from '@angular/material';

@Component({
    selector: 'barlink-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss'],
    providers: [ExpenseService]
})
export class ExpensesComponent {

expenses: Expense[];

  constructor( public dialog: MatDialog, private expenseService: ExpenseService) { }

    ngOnInit() {
      this.expenseService.getExpenses().subscribe(
              data => {
                this.expenses = data['expensesList']
                console.log(this.expenses)
              },
              error => console.log(error)
            );
    }


    openDialog(): void {
      let dialogRef = this.dialog.open(ExpenseDetailDialog, {
        width: '250px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

}
