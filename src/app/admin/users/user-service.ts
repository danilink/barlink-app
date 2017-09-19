import { Injectable }     from '@angular/core';
import {USERS} from './mock-users';
import {User} from './user';
import {Observable} from 'rxjs/Observable';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class UserService {

    constructor () {}
    getItemAll(): Observable<User[]> {
            return Observable.of(USERS);
        }
}
