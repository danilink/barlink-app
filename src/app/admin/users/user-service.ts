import { Injectable }     from '@angular/core';
import { USERS } from './mock-users';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class UserService {

    private API_URL  = environment.api_url + '/users'

    constructor (public http: HttpClient) {}

    getItemAll(): Observable<User[]> {
      return Observable.create(USERS);
    }

    getUser(): Observable<any> {
      return this.http.get('https://api.github.com/users/danilink');
    }
}
