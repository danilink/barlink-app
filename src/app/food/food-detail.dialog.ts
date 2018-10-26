import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Food } from './food';
import { first } from 'rxjs/operators';
import { FoodService } from './food.service';

@Component({
    selector: 'food-detail-dialog',
    templateUrl: './food-detail.dialog.html',
  })
  export class FoodDetailDialog implements OnInit {
    
    foodForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<FoodDetailDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any, 
                public formBuilder: FormBuilder,
                public foodService: FoodService) { }

    ngOnInit(): void {
      this.foodForm = this.formBuilder.group({
        name: [null, Validators.required],
        price: [null, Validators.required],
        category: null});
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    onSubmit(food: Food, isvalid:Boolean) {
      if (isvalid) {
          this.foodService.create(food)
          .pipe(first())
          .subscribe(
            data => {
              console.log(data)
            },
            error => {
              console.log(error)
            });
      } else {
        console.log(food)
      }
    }
  
  }