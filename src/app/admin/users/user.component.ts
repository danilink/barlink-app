import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user-service';
import {User} from './user';
import {UserDataSource} from './user.datasource';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


@Component({
  selector: 'table-pagination-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
  providers: [UserService]
})
export class TablePaginationUser {
  displayedColumns = ['userId', 'userName', 'jobTitle'];
  dataSource : UserDataSource | null;
  //@ViewChild(MdPaginator) paginator: MdPaginator;

constructor( private userService: UserService) { }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.userService);
  }

}
