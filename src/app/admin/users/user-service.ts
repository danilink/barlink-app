import { Injectable }     from '@angular/core';
import {USERS} from './mock-users';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class UserService {

    constructor (public http: HttpClient) {}

    getItemAll(): Observable<User[]> {
      return Observable.of(USERS);
    }

    getUser(): Observable<any> {
      return this.http.get('https://api.github.com/users/danilink');
    }
}
