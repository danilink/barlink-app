import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'expense-detail-dialog',
    templateUrl: './expense-detail.dialog.html',
  })
  export class ExpenseDetailDialog {
  
    constructor(
      public dialogRef: MatDialogRef<ExpenseDetailDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }