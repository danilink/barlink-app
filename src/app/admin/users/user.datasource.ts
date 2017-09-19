import {DataSource} from '@angular/cdk/collections';
import {UserService} from './user-service';
import {User} from './user';
import {MdPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';

export class UserDataSource extends DataSource<User> {

  constructor(private userService: UserService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<User[]> {
        return this.userService.getItemAll();
    }

    disconnect() {
    }
}
