import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Expense } from './expense';

@Component({
    selector: 'expense-detail-dialog',
    templateUrl: './expense-detail.dialog.html',
  })
  export class ExpenseDetailDialog implements OnInit {
    
    expenseForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<ExpenseDetailDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any, 
                public formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.expenseForm = this.formBuilder.group({
        title: [null, Validators.required],
        price: [null, Validators.required],
        description: null,
        paymentdate: [null, Validators.required]});
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    onSubmit(expense: Expense, isvalid:Boolean) {

    }
  
  }