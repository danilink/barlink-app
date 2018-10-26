import { Component, OnInit, ViewChild } from '@angular/core';
import {FoodService} from './food.service';
import {Food} from './food';
import { MatDialog, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { FoodDetailDialog } from './food-detail.dialog'


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price'];
  dataSource = null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private foodService: FoodService) { }

  ngOnInit() {
    this.loadData();
  }


  editDish(): void {
    let dialogRef = this.dialog.open(FoodDetailDialog, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
      console.log('The dialog was closed');
    });
  }

  loadData(): void {
    this.foodService.allFood().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data['foodList'])
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log(error)
    );
  }

}
